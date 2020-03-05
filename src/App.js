import React from 'react';
import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import { UserList } from './Components/users';
import { PostList, PostEdit, PostCreate } from './Components/posts'

import Dashboard from './Components/Dashboard'
import authProvider from './Auth/authProvider';


//icons
import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';

const dataProvider = jsonServerProvider('http://jsonplaceholder.typicode.com');
const App = () => (
    <Admin dashboard={Dashboard} authProvider={authProvider} dataProvider={dataProvider}>
      <Resource name="posts" icon={PostIcon} 
        list={PostList}
        edit={PostEdit}
        create={PostCreate}
      />
      <Resource name="users" list={UserList} icon={UserIcon} />
    </Admin>
);

export default App;
