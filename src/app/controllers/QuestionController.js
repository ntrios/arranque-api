import Question from '../models/Question';
import Answer from '../models/Answer';

class QuestionController {
  async index(req, res) {
    const { step } = req.params;

    const questions = await Answer.findAll({
      where: {
        step,
      },
      attributes: ['id', 'title'],
      include: [
        {
          model: Question,
          as: 'idQst',
          attributes: ['id', 'title'],
        },
      ],
    });

    return res.json({ questions });
  }
}

export default new QuestionController();
