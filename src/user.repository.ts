import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Model } from 'mongoose';
import { CreateUserI } from './interface/user.interface';
import { User, UserDocument } from './model/user.model';
import { PropDataInput } from 'util/util.interface';

@Injectable()
export class UserRepository {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  /**
   * @Responsibility: Repo for creating a user
   *
   * @param data
   * @returns {Promise<UserDocument>}
   */

  async createUser(data: CreateUserI): Promise<UserDocument> {
    try {
      return await this.userModel.create(data);
    } catch (error) {
      throw error;
    }
  }

  /**
   * @Responsibility: Repo to retrieve user detail
   *
   * @param where
   * @returns {Promise<UserDocument>}
   */

  async retrieveUser(
    where: PropDataInput,
    attributes?: string,
  ): Promise<UserDocument> {
    try {
      return await this.userModel.findOne(where).select(attributes);
    } catch (error) {
      throw error;
    }
  }
}
