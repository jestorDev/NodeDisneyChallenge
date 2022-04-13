'use strict';

//import { Sequelize  } from "sequelize";
import { Sequelize, Model, DataTypes } from "sequelize";

// Option 1: Passing a connection URI
const sequelize = new Sequelize('postgres://postgres:123456@0.0.0.0:5432/simple') // Example for postgres

export default sequelize;
