import Sequelize, { Model } from 'sequelize';

class Answer extends Model {
  static init(sequelize) {
    super.init(
      {
        title: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Question, {
      foreignKey: 'id_qst',
      as: 'idQst',
    });
  }
}

export default Answer;
