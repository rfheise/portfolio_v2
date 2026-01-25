export default function Education() {
  return (
    <div className="block">
      <div className="section-head">
        <div className="section-title">
          <h2>Education</h2>
        </div>
      </div>

      <div className="panel">
        <h3 className="panel-title">Bachelor of Science in Computer Science</h3>
        <p className="panel-meta panel-meta--split">
          <span className="panel-meta-part">Purdue University</span>
          <span className="panel-meta-sep" aria-hidden="true">
            {' '}
            •{' '}
          </span>
          <span className="panel-meta-part">West Lafayette, IN</span>
        </p>
        <p className="panel-meta">December 2024</p>
        <p className="panel-meta">GPA 3.5 / 4.0</p>
        <p className="panel-body">
          Concentrated in Machine Learning and Security, with a minor in Mathematics
        </p>
      </div>
    </div>
  );
}
