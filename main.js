const thecamp = require('the-camp-lib');
const dotenv = require('dotenv');
const getContent = require('./src/collector');

dotenv.config();

const getDate = () => {
  const d = new Date();
  const yyyy = d.getFullYear();
  const mm = d.getMonth() + 1;
  const dd = d.getDate();
  return `${yyyy}.${mm}.${dd}일자 뉴스`;
};

(async function () {
  const name = process.env.NAME;
  const birth = process.env.BIRTHDAY;
  const enterDate = process.env.ENTER_DATE;
  const type = process.env.TYPE;
  const to = process.env.TO;

  const currDate = new Date();
  const toDate = new Date(to);

  if (currDate > toDate) {
    return;
  }

  const soldier = new thecamp.Soldier(
    name,
    birth,
    enterDate,
    '예비군인/훈련병',
    '육군',
    type,
    thecamp.SoldierRelationship.FRIEND,
  );

  const client = new thecamp.Client();

  await client.login(process.env.EMAIL, process.env.PASSWORD);
  await client.addSoldier(soldier);

  const [trainee] = await client.fetchSoldiers(soldier);
  const message = new thecamp.Message(getDate(), await getContent(), trainee);

  await client.sendMessage(soldier, message);
})();
