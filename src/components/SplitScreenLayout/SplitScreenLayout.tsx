import './SplitScreenLayout.css';

const SplitScreenLayout = ({ leftContent, rightContent }: any) => {
  return (
    <div className='split-screen-layout'>
      <div className='left-side'>{leftContent}</div>
      <div className='right-side'>{rightContent}</div>
    </div>
  );
};

export default SplitScreenLayout;
