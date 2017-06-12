import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import BreadcrumbConfig from 'auto-breadcrumb';
// const Breadcrumbs = BreadcrumbConfig({
//   dynamicRoutesMap: {
//     '/:id': 'people.{{id}}',
//     '/:idd/:id': ['people..', ({ id, idd }) => `${idd},${id}`],
//     '/:iddd/:idd/:id': ({ iddd, idd, id }) => `people...${iddd},${idd},${id}`,
//   },
// });
// const Breadcrumbs = BreadcrumbConfig({
//   staticRoutesMap: {
//     {c: 'Michelle'},
//     {'/1': 'Sean'},
//     {'/2': 'Kim '},
//     {'/3': 'David'}
//   },
// });
//拿到当前的路径
//将当前的路径分割为数组 与  相应汉字对应
//渲染
const Breadcrumbs = BreadcrumbConfig({
  staticRoutesMap: {
    '/0': 'Michelle',
    '/1': 'Sean',
    '/2': 'Kim ',
    '/3': 'David',
    '/1/0':  'Sean/Michelle'
  }
});
const PEEPS = [
  { id: 0, name: 'Michelle', friends: [1, 2, 3] },
  { id: 1, name: 'Sean', friends: [0, 3] },
  { id: 2, name: 'Kim', friends: [0, 1, 3] },
  { id: 3, name: 'David', friends: [1, 2] },
];

const find = (id) => PEEPS.find(p => p.id == id) || {};

const RecursiveExample = () => (
  <Router>
    <div>
      <Route
        render={({ location }) => {
          return <Breadcrumbs pathname={location.pathname} />;
        }}
      />
      <Person match={{ params: { id: 0 }, url: '' }} />
    </div>
  </Router>
);

const Person = ({ match }) => {
  const person = find(match.params.id);
  return (
    <div>
      <h3>{person.name}’s Friends</h3>
      <ul>
        {person.friends.map(id => (
          <li key={id}>
            <Link to={`${match.url}/${id}`}>
              {find(id).name}
            </Link>
          </li>
        ))}
      </ul>
      <Route path={`${match.url}/:id`} component={Person} />
    </div>
  );
};

export default RecursiveExample;