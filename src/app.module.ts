import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { NoticiasModule } from './noticias/noticias.module';
import { NoticiasComentariosModule } from './noticias-comentarios/noticias-comentarios.module';
import { MidiasModule } from './midias/midias.module';
import { LocaisModule } from './locais/locais.module';
import { AdminModule } from './admin/admin.module';
import { NoticiasLikesModule } from './noticias-likes/noticias-likes.module';
import { GruposModule } from './grupos/grupos.module';
import { DoacoesModule } from './doacoes/doacoes.module';
import { DoacoesTiposModule } from './doacoes-tipos/doacoes-tipos.module';
import { DoacoesComentariosModule } from './doacoes-comentarios/doacoes-comentarios.module';
import { DoacoesCampanhasModule } from './doacoes-campanhas/doacoes-campanhas.module';
import { DoacoesLikesModule } from './doacoes-likes/doacoes-likes.module';
import { DoacoesMedidasModule } from './doacoes-medidas/doacoes-medidas.module';
import { DoacoesCategoriasModule } from './doacoes-categorias/doacoes-categorias.module';
import { VouchersModule } from './vouchers/vouchers.module';
import { PatologiasModule } from './patologias/patologias.module';
import { PatologiasXUsersModule } from './patologias-x-users/patologias-x-users.module';
import { HemocentrosModule } from './hemocentros/hemocentros.module';
import { FarmaciasModule } from './farmacias/farmacias.module';



@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '',
      port: 3306,
      username: '',
      password: '',
      database: '',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),

    UsersModule,

    NoticiasModule,

    NoticiasComentariosModule,

    MidiasModule,

    LocaisModule,

    AdminModule,

    NoticiasLikesModule,

    GruposModule,

    DoacoesModule,

    DoacoesTiposModule,

    DoacoesComentariosModule,

    DoacoesCampanhasModule,

    DoacoesLikesModule,

    DoacoesMedidasModule,

    DoacoesCategoriasModule,

    VouchersModule,

    PatologiasModule,

    PatologiasXUsersModule,

    HemocentrosModule,

    FarmaciasModule

    
  
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
