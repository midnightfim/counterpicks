
import styles from './page.module.scss';
import axios from "axios";

export default async function Index() {

  const { data } = await axios.get(
     "http://localhost:3000/api/heroes"
   );

  console.log(data)

  return (
    <div className={styles.page}>
      <div className="wrapper">
        <div className="container">
          <div id="welcome">
              <span> Hello there, </span>
              Welcome front asdc 👋
              <h1>{data.map((item) => {
                return (
                  <div key={item.id}>
                    <h1>{item?.name}</h1>
                    <h1>{item.id}</h1>
                    <h1>{item.description}</h1>
                  </div>
                )
              })}</h1>
          </div>

        </div>
      </div>
    </div>
  );
}
