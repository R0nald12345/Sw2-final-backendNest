import { Injectable, BadRequestException, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { LoginDto, RegisterDto } from './dto/create-auth.dto';
import { Administrador } from '../administrador/entities/administrador.entity';
import { Pasajero } from '../pasajero/entities/pasajero.entity';
import { Conductor } from '../conductor/entities/conductor.entity';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(Administrador)
    private adminRepository: Repository<Administrador>,
    @InjectRepository(Pasajero)
    private pasajeroRepository: Repository<Pasajero>,
    @InjectRepository(Conductor)
    private conductorRepository: Repository<Conductor>,
    private jwtService: JwtService,
  ) {}

  async register(registerDto: RegisterDto) {
    const { email, password, tipo } = registerDto;

    let usuarioExistente: any;
    let nuevoUsuario: any;

    // Validar que no exista en la tabla correspondiente
    if (tipo === 'ADMINISTRADOR') {
      usuarioExistente = await this.adminRepository.findOne({ where: { email } });
      if (usuarioExistente) throw new BadRequestException('Administrador ya existe');

      const hashedPassword = await bcrypt.hash(password, 10);
      nuevoUsuario = this.adminRepository.create({
        ...registerDto,
        password: hashedPassword,
      });
      await this.adminRepository.save(nuevoUsuario);
    } else if (tipo === 'PASAJERO') {
      usuarioExistente = await this.pasajeroRepository.findOne({
        where: { email_institucional: email },
      });
      if (usuarioExistente) throw new BadRequestException('Pasajero ya existe');

      const hashedPassword = await bcrypt.hash(password, 10);
      nuevoUsuario = this.pasajeroRepository.create({
        email_institucional: email,
        password: hashedPassword,
        nombre_completo: registerDto.nombre_completo,
        numero_registro: registerDto.numero_registro,
      });
      await this.pasajeroRepository.save(nuevoUsuario);
    } else if (tipo === 'CONDUCTOR') {
      usuarioExistente = await this.conductorRepository.findOne({
        where: { email_institucional: email },
      });
      if (usuarioExistente) throw new BadRequestException('Conductor ya existe');

      const hashedPassword = await bcrypt.hash(password, 10);
      nuevoUsuario = this.conductorRepository.create({
        email_institucional: email,
        password: hashedPassword,
        nombre_completo: registerDto.nombre_completo,
        numero_registro: registerDto.numero_registro,
      });
      await this.conductorRepository.save(nuevoUsuario);
    } else {
      throw new BadRequestException('Tipo de usuario inválido');
    }

    const token = this.jwtService.sign({
      sub: nuevoUsuario.id,
      email: nuevoUsuario.email || nuevoUsuario.email_institucional,
      rol: tipo,
    });

    return {
      message: 'Usuario registrado exitosamente',
      token,
      usuario: {
        id: nuevoUsuario.id,
        email: nuevoUsuario.email || nuevoUsuario.email_institucional,
        rol: tipo,
      },
    };
  }

  async login(loginDto: LoginDto) {
    const { email, password, tipo } = loginDto;

    let usuario: any;

    // Buscar según tipo de usuario
    if (tipo === 'ADMINISTRADOR') {
      usuario = await this.adminRepository.findOne({ where: { email } });
    } else if (tipo === 'PASAJERO') {
      usuario = await this.pasajeroRepository.findOne({
        where: { email_institucional: email },
      });
    } else if (tipo === 'CONDUCTOR') {
      usuario = await this.conductorRepository.findOne({
        where: { email_institucional: email },
      });
    } else {
      throw new BadRequestException('Tipo de usuario inválido');
    }

    if (!usuario) {
      throw new UnauthorizedException('Credenciales inválidas');
    }

    const esValido = await bcrypt.compare(password, usuario.password);

    if (!esValido) {
      throw new UnauthorizedException('Credenciales inválidas');
    }

    const token = this.jwtService.sign({
      sub: usuario.id,
      email: usuario.email || usuario.email_institucional,
      rol: tipo,
    });

    return {
      message: 'Login exitoso',
      token,
      usuario: {
        id: usuario.id,
        email: usuario.email || usuario.email_institucional,
        nombre: usuario.nombre || usuario.nombre_completo,
        rol: tipo,
      },
    };
  }
}