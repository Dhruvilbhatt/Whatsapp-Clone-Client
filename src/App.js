import Messenger from './Components/Messenger'
import AccountProvider from './Context/AccountProvider';
import TemplateProvider from './Themes/TemplateProvider';
import UserProvider from './Context/UserProvider';
import ConversationProvider from './Context/ConversationProvider';

function App() {
  return (
    <ConversationProvider>
      <UserProvider>
        <TemplateProvider>
          <AccountProvider>
            <Messenger />
          </AccountProvider>
        </TemplateProvider>
      </UserProvider>
    </ConversationProvider>
  );
}

export default App;
