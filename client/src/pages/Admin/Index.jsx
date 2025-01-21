import React from 'react';
import Header from '../../components/Header';
import { Tabs } from 'antd';
import AdminIntro from './AdminIntro';
import AdminAbout from './AdminAbout';
import { useSelector } from 'react-redux';
import AdminExperience from './AdminExperience';
import AdminProjects from './AdminProjec';
import AdminContact from './AdminContact';

function Admin() {
  const { loading, portfolioData } = useSelector((state) => state.root);

  const tabItems = [
    {
      key: '1',
      label: 'Intro',
      children: <AdminIntro />,
    },
    {
      key: '2',
      label: 'About',
      children: <AdminAbout />,
    },
    {
      key: '3',
      label: 'Experience',
      children: <AdminExperience />,
    },
    {
      key: '4',
      label: 'Projects',
      children: <AdminProjects />,
    },
    {
      key: '5',
      label: 'Contact',
      children: <AdminContact />,
    },
  ];

  return (
    <div>
      <Header />
      <h1 className='text-2xl px-5 py-2 text-primary'>Portfoli Admin</h1>

      
{
 portfolioData && <div className="px-5">
    <Tabs defaultActiveKey="1" items={tabItems} tabPosition='left' />
  </div>
}
    </div>
  );
}

export default Admin;
