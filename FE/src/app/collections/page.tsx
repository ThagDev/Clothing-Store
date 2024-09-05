import Sliders from '@/components/home/sliders';
import React from 'react';
const data = {
  id: 1,
  title: 'collections',
  collections: [
    {
      id: 1,
      title: 'collections',
      slug: 'collections',
    },
  ],
};

const CollectionsPage = () => {
  return (
    <div className=' pt-20 container z-0  text-xl'>
      <div className=''>
        <Sliders
          dataTopic={data.title}
          dataCards={[]}
        />
      </div>
    </div>
  );
};

export default CollectionsPage;
