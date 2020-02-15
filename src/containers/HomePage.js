import React from "react";
import { Link } from 'react-router-dom';

class HomePage extends React.Component {
    render () {
        return (
            <div>
                <h1>React Progress Bars Project</h1>
                <h2>Get Started</h2>
                <ol>
                    <li>
                        <Link to="/progress-bars"> Progress Bars Demo</Link>
                    </li>
                    <li>
                        <a href="https://github.com/maqsood1ahmed"> Progress Bars Source Code </a>
                    </li>
                </ol>
            </div>
        );
    }
}

export default HomePage;
