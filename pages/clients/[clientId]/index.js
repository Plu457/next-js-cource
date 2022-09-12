import { useRouter } from 'next/router';

function ClientProjectPage() {
  const router = useRouter();

  console.log(router.query);

  const loadProjectHandler = () => {
    //* load data...
    //* form 이벤트를 사용할 때 router.push() 사용
    //* 일반적인 상황에서는 Link 사용
    // router.push('/clients/max/projecta');
    router.push({
      pathname: '/clients/[clientId]/[clientprojectId]',
      query: { clientId: 'max', clientprojectId: 'projecta' },
    });
  };

  return (
    <div>
      <h1>The Projects of a Given Client</h1>
      <button onClick={loadProjectHandler}>Load Porject A</button>
    </div>
  );
}

export default ClientProjectPage;
