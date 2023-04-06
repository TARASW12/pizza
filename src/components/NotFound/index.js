import style from "./notFound.module.scss";
const NotFoundBlock = () => {
  return (
    <h1 className={style.root}>
      <span>😕</span>
      <br />
      <span>Ничево не найдено</span>
      <p className={style.description}>
        К сожелению данная страница отсутствует в нашем интернет магазине
      </p>
    </h1>
  );
};
export default NotFoundBlock;
