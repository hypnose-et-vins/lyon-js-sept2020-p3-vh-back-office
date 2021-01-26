import * as React from 'react';
import { Resource } from 'react-admin';
import './Dashboard.scss';
import { Card, CardContent, CardHeader } from '@material-ui/core';
import {
  userListDahsboard,
  reviewsListDashboard,
  messageListDashboard,
  EventListDashboard,
} from './Dashboard/DashboardContent';

export default () => (
  <div className="dashboardContainer">
    <div className="dashboardBody">
      <div className="dashboardBodyLeft">
        <Card className="dashboardMessage style-1">
          <CardHeader title="Derniers Messages" />
          <CardContent>
            {' '}
            <Resource name="contact" list={messageListDashboard} />
          </CardContent>
        </Card>

        <Card className="dashboardEvent style-2">
          <CardHeader title="Prochains Événements" />
          <CardContent>
            {' '}
            <Resource name="events" list={EventListDashboard} />
          </CardContent>
        </Card>
      </div>

      <div className="dashboardBodyRight">
        <Card className="dashboardReview style-1">
          <CardHeader title="Derniers Commentaires" />
          <CardContent>
            {' '}
            <Resource
              options={{ label: 'Reviews' }}
              name="reviews"
              list={reviewsListDashboard}
            />
          </CardContent>
        </Card>

        <Card className="dashboardUser style-2">
          <CardHeader title="Nouveaux Utilisateurs" />
          <CardContent>
            {' '}
            <Resource
              options={{ label: 'Users' }}
              name="users"
              list={userListDahsboard}
            />
          </CardContent>
        </Card>
      </div>
    </div>
  </div>
);
