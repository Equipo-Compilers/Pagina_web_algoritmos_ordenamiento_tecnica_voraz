import { Link } from "react-router-dom";
import "./Card.css";

interface CardProps {
  title: string;
  backgroundColor: string;
  tags: string[];
  route: string;
  gifImage?: string;
}

export default function Card({ title, backgroundColor, tags, route, gifImage }: CardProps){
    return(
        <div className="card">
            <Link to={route} className="card-route">

            <div className="graph-card" style={{ backgroundColor: backgroundColor }}>
                {gifImage ? <img src={gifImage} alt={title} /> : null}
            </div>

            <div className="card-info">
                <div className="card-header">
                    <h3>{title}</h3>
                    <button className="btn-training">Training</button>
                </div>

                <div className="card-tags">
                    {tags.map((tag, index) => (
                    <span key={index} className="tag">{tag}</span>
                    ))}
                </div>
            </div>

            </Link>

        </div>
    );
}