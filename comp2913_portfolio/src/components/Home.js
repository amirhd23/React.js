import React, {Component} from 'react';

class Home extends Component {
    render() {
        return (
            <div class="card-body">
                <h1 class="card-title">Amir Deris React Portfolio</h1>
                <p class="card-text">This web page is the portfolio of projects created during COMP2913 React course at BCIT.</p>
                <a target="_blank" href="https://ca.linkedin.com/in/amir-deris-75a9a383" class="btn btn-primary">LinkedIn</a>
                <br />
                <a target="_blank" href="https://github.com/amirhd23/" class="btn btn-primary">GitHub</a>
            </div>
        );
    }
}
export default Home;