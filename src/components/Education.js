import React from 'react';

const Education = (props) => {

  return (
    <section id="education" className="ha-waypoint" data-animate-down="ha-header-small" data-animate-up="ha-header-small" style={styles.main}>
     <div style={styles.innerMain}>
        <div className="content-header" style={{zIndex: 9}}>
          <h2 className="d3-effect" style={styles.header}>Education</h2>
          <br/>
        </div>
	        <div className={`content-body ${props.isMobile ? 'mobile' : ''}`} style={styles.schoolContainer}>
	          {/* EDUCATION 1 */}
	          <div className="hvr-glow education-card" style={{width: '100%', margin: 10, fontSize: 16}}>
	            <div className="card-header" style={{ display: 'flex', flexDirection: 'row-reverse', justifyContent: 'space-between'}}>
	              <h3>Flatiron School </h3> <h3><span className="job-title">2017 - 2017</span></h3>
	            </div>
	            <div className="card-content">
	              <p>Software Engineer Immersive. <br /></p>
	            </div>
	          </div>
	          {/* EDUCATION 2 */}
	          <div className="hvr-glow education-card" style={{width: '100%', margin: 10, fontSize: 16}}>
	            <div className="card-header" style={{ display: 'flex', flexDirection: 'row-reverse', justifyContent: 'space-between'}}>
	              <h3>Lehman College </h3> <h3><span className="job-title">2012 - 2016</span></h3>
	            </div>
	            <div className="card-content">
	              <p>Bachelors of Science in Dietetics, Foods and Nutrition. <br /></p>
	            </div>
	          </div>
	        </div>
	      </div>
	  </section> 
  )
}

const styles = {
  main: {
    display: 'flex',
    marginTop: 150,
    height: window.innerHeight * 0.8,
    justifyContent: 'center'
  },
  innerMain: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: 100
  },
  header: {
    cursor: 'default',
    fontSize: "calc(5vw + 5vh)",
    textAlign: 'center',
    color: '#3e6fb2',
    marginBottom: -56,
    width: '100%',
    padding: 0,
    overflow: 'visible'
  },
  schoolContainer: {
    marginTop: '10vh'
  }
}

export default Education;
