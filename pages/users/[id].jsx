import { useRouter } from "next/router";
import MainContainer from "../../components/MainContainer";
import styles from "./user.module.scss";

export default function User({ user }) {
  const { query } = useRouter();
  return (
    <MainContainer keywords={user.name}>
      <div className={styles.user}>
        <h1>Benutzer mit id {query.id}</h1>
        <div>
          Benutzername: <strong>{user.name}</strong>
        </div>
      </div>
    </MainContainer>
  );
}

export async function getServerSideProps({ params }) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.id}`
  );
  const user = await response.json();
  console.log("params", params);
  return {
    props: { user }, // will be passed to the page component as props
  };
}
