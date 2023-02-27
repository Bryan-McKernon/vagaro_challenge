import { Key } from "react";

const myHero = (
  {
    name,
    emoji,
    languages,
  }: { name: String; emoji: String; languages: Array<any> }
) => {
  return (
    <div className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
      <div className="text-sky-500 dark:text-sky-400">{name}</div>
      <div className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto">{emoji}</div>
      {languages.map((language, Key: Key) => {
        return <div className="text-sky-500 dark:text-sky-400" key={Key}>{language.name}</div>;
      })}
    </div>
  );
};

export default myHero;