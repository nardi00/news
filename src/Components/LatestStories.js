import React, { useState } from "react";
import './index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const LatestStories = ({newsData}) => {

    const [data, setData] = useState([])
    const [searching, setSearching] = useState(false)
    const [value, setValue] = useState("")

    const search = (event) => {
        setValue(event.target.value)
    }

    const fetchNews = async () => {
            await fetch(` https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${value}&api-key=${process.env.REACT_APP_API_KEY}`)
            .then(res=> res.json())
            .then(result => {
                setData(result)
            })
            if(data.status !== "OK") {
                setSearching(false)
            } else {
                setSearching(true)
            }

        }

    const searchNews = (event) => {
        event.preventDefault();

        if(value !== "") {
            fetchNews()
        } else {
            alert("You must write something")
        }
    }

    const clickLatest = () => {
        setSearching(false)
    }

        return(
            <div className="container">
                <div className="header">
                    <button onClick={clickLatest} style={{
                        all: "unset",
                        cursor: "pointer"
                    }}><h1>Latest Stories</h1></button>
                    <div className="search-box">
                        <button className="btn-search"><FontAwesomeIcon icon={faSearch} onClick={searchNews}/></button>
                        <input type="text" className="input-search" placeholder="Search..." value={value} onChange={search}/>
                    </div>
                </div>

                {(searching) ? 
                (<div className="wrapper-search">
                    <div>
                        <div className="list-container" >
                            <a href={data.response.docs[0].web_url} className="hvr">
                                <h2 className="list-title">{data.response.docs[0].headline.main}</h2>
                                <p className="list-author">{data.response.docs[0].byline.original}</p>
                            </a>
                        </div>
                    </div>
                    <div >
                        <div className="list-container" >
                            <a href={data.response.docs[1].web_url} className="hvr">
                                <h2 className="list-title">{data.response.docs[1].headline.main}</h2>
                                <p className="list-author">{data.response.docs[1].byline.original}</p>
                            </a>
                        </div>
                    </div>
                    <div>
                        <div className="list-container" >
                            <a href={data.response.docs[2].web_url} className="hvr">
                                <h2 className="list-title">{data.response.docs[2].headline.main}</h2>
                                <p className="list-author">{data.response.docs[2].byline.original}</p>
                            </a>
                        </div>
                    </div>
                    <div>
                        <div className="list-container" >
                            <a href={data.response.docs[3].web_url} className="hvr">
                                <h2 className="list-title">{data.response.docs[3].headline.main}</h2>
                                <p className="list-author">{data.response.docs[3].byline.original}</p>
                            </a>
                        </div>
                    </div>
                    <div>
                        <div className="list-container" >
                            <a href={data.response.docs[4].web_url} className="hvr">
                                <h2 className="list-title">{data.response.docs[4].headline.main}</h2>
                                <p className="list-author">{data.response.docs[4].byline.original}</p>
                            </a>
                        </div>
                    </div>
                    <div>
                        <div className="list-container" >
                            <a href={data.response.docs[5].web_url} className="hvr">
                                <h2 className="list-title">{data.response.docs[5].headline.main}</h2>
                                <p className="list-author">{data.response.docs[5].byline.original}</p>
                            </a>
                        </div>
                    </div>
                    <div>
                        <div className="list-container" >
                            <a href={data.response.docs[6].web_url} className="hvr">
                                <h2 className="list-title">{data.response.docs[6].headline.main}</h2>
                                <p className="list-author">{data.response.docs[6].byline.original}</p>
                            </a>
                        </div>
                    </div>
                    <div>
                        <div className="list-container" >
                            <a href={data.response.docs[8].web_url} className="hvr">
                                <h2 className="list-title">{data.response.docs[8].headline.main}</h2>
                                <p className="list-author">{data.response.docs[8].byline.original}</p>
                            </a>
                        </div>
                    </div>
                    <div>
                        <div className="list-container" >
                            <a href={data.response.docs[9].web_url} className="hvr">
                                <h2 className="list-title">{data.response.docs[9].headline.main}</h2>
                                <p className="list-author">{data.response.docs[9].byline.original}</p>
                            </a>
                        </div>
                    </div>
                </div>)
                
                : 


                (<div className="wrapper">
                    <div className="list1">
                        <div className="list-container" >
                            <a href={newsData.results[3].url} className="hvr">
                                <h2 className="list-title">{newsData.results[3].title}</h2>
                                <p className="list-author">{newsData.results[3].byline}</p>
                            </a>
                        </div>
                    </div>
                <div className="list2">
                    <div className="list-container" >
                        <a href={newsData.results[4].url} className="hvr">
                            <h2 className="list-title">{newsData.results[4].title}</h2>
                            <p className="list-author">{newsData.results[4].byline}</p>
                        </a>
                    </div>
                </div>
                <div className="list3">
                    <div className="list-container" >
                        <a href={newsData.results[5].url} className="hvr">
                            <h2 className="list-title">{newsData.results[5].title}</h2>
                            <p className="list-author">{newsData.results[5].byline}</p>
                        </a>
                    </div>
                </div>
                <div className="list4">
                    <div className="list-container" >
                        <a href={newsData.results[6].url} className="hvr">
                            <h2 className="list-title">{newsData.results[6].title}</h2>
                            <p className="list-author">{newsData.results[6].byline}</p>
                        </a>
                    </div>
                </div>
                <div className="list5">
                    <div className="list-container" >
                        <a href={newsData.results[7].url} className="hvr">
                            <h2 className="list-title">{newsData.results[7].title}</h2>
                            <p className="list-author">{newsData.results[7].byline}</p>
                        </a>                
                    </div>
                </div>
                <div className="list6">
                    <div className="list-container" >
                        <a href={newsData.results[8].url} className="hvr">
                            <h2 className="list-title">{newsData.results[8].title}</h2>
                            <p className="list-author">{newsData.results[8].byline}</p>
                        </a>
                    </div>
                </div>
                <div className="top-article-container" style={{
                    backgroundPosition: "center center",
                    backgroundImage: `url(${newsData.results[0].multimedia[0].url})`,
                    backgroundSize: "cover",
                    height: "100%",
                    position: "relative",
                    width: "100%",
                }}>
                    
                    <div className="top-title">
                        <a href={newsData.results[0].url} className="title">
                            <h2 className="title">{newsData.results[0].title}</h2>
                        </a>
                    </div>

                </div>
                <div className="article-container-2">
                    
                        <div className="image-container" style={{
                        backgroundImage: `url(${newsData.results[1].multimedia[0].url})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center center",
                        height: "50%",
                        width: "100%",
                        }}></div>
                    <a href={newsData.results[1].url} >    
                        <div className="big-container">
                            <div className="article-title-container">
                                <h2 className="article-title">{newsData.results[1].title}</h2>
                                <p className="article-author">{newsData.results[1].byline}</p>
                            </div>
                        </div>
                   </a>                    
                </div>
                <div className="article-container-3">
                    
                     <div className="image-container" style={{
                        backgroundImage: `url(${newsData.results[8].multimedia[0].url})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center center",
                        height: "50%",
                        width: "100%",
                        }}></div>
                    <a href={newsData.results[2].url} >
                        <div className="big-container">
                            <div className="article-title-container">
                                <h2 className="article-title">{newsData.results[2].title}</h2>
                                <p className="article-author">{newsData.results[2].byline}</p>
                            </div>
                        </div>
                   </a>             
                </div>
                </div>)}
            </div>
        )
}

export default LatestStories 