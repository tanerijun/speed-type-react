import { faker } from "@faker-js/faker";

const words = faker.random.words(20);

function Words() {
  return <div className="text-slate-500 text-2xl">{words}</div>;
}

export default Words;
