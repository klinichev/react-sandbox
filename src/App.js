import { QueryClient, QueryClientProvider } from 'react-query';

import CheckList from './components/check-list/CheckList.js';
import Dialog from './components/dialog/Dialog.js';
import SimpleForm from './components/simple-form/SimpleForm.js';
import Header from './components/header/Header.js';
import Img from './components/img/Img.js';
import * as mutations from './api/Tasks.js';

import { HorizontalContainer } from './styles.js';

export default function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <AppLoader />
    </QueryClientProvider>
  );
}

function AppLoader() {
  const { isLoading, isError, data, error } = mutations.useTasks();

  if (isLoading) return <p>Загрузка...</p>;

  if (isError) return <p>Ошибка: {error.message}</p>;

  return (
    <Todo data={data} />
  );
}

function Todo({ data }) {
  const subTitle = 'Чего-то не хватает? Давайте пополним мой список дел!';
  const imageSource = '/img/portrait.jpg';

  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <HorizontalContainer>
          <Img src={imageSource} />
          <div>
            <h2>{subTitle}</h2>
            <CheckList items={data} />
            <Dialog Content={SimpleForm} />
          </div>
        </HorizontalContainer>
      </div>
    </div>
  );
}