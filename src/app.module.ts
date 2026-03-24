import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { AuthController } from './auth/auth.controller';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { DB_NAME, MONGO_URL_LOCAL } from './config';
import { CourseModule } from './course/course.module';

@Module({
  imports: [AuthModule, UserModule,MongooseModule.forRoot(`${MONGO_URL_LOCAL}${DB_NAME}` as string), CourseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
