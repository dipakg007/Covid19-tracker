import React from "react";
const heading = {
      backgroundColor: '#80ffd4', 
      padding: '20px', 
      textAlign: 'center', 
    };

function Symtoms() {
  return (
    <div className="container-fluid nav_bg">
      <div className="row">
        <div className="col-11 mx-auto">
          <h1 style = {heading}>Symtoms (COVID-19)</h1>
                        <nav>
                            <ul>
                                <li>
                                    <a href="https://www.youtube.com/playlist?list=PLvrp9iOILTQatwnqm61jqFrsfUB4RKh6J">ASL Videos</a>
                                </li>
                            </ul>
                        </nav>
             <div>
              <img alt="Fever" src="https://media.tenor.com/images/ec6956170b2957f3535c899340d81414/tenor.gif" data-atf="1" width="100px" height="100px"></img>
              <div>Fever</div>
            </div>
          <div>
            <img alt="Dry cough" src="https://media1.tenor.com/images/4dc1be107c390c04a85dc5336bbce37b/tenor.gif?itemid=15532832" data-atf="1" width="100px" height="100px"></img>
            <div>Dry cough</div>
          </div>
          <div>
            <img alt="Tiredness" src="https://media1.tenor.com/images/af75e48b53153cea848974c95b40b685/tenor.gif?itemid=5061523" data-atf="1" width="100px" height="100px"></img>
            <div>Tiredness</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Symtoms;
