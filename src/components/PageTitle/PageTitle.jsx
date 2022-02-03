import './PageTitle.css';

const PageTitle = ({ title, subtitles }) => {
  return (
    <div className="page-title">
      <h1 className="allura">{title}</h1>
      {subtitles && (
        <div>
          <h3>subtitles</h3>
        </div>
      )}
    </div>
  );
};

export default PageTitle;
