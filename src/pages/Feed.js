import React, { Component } from 'react'

import './Feed.css'

import more from '../assets/more.svg'
import like from '../assets/like.svg'
import comment from '../assets/comment.svg'
import send from '../assets/send.svg'
import ts from '../assets/ts.jpg'
import tec from '../assets/tec.jpg'
import empresa from '../assets/empresa.png'

class Feed extends Component {
    state = {
        post: [
            {
                img: ts
            },
            {
                img: tec
            },
            {
                img: empresa
            }
        ]
    }
    render() {
        const { post } = this.state
        return(
            <>
                {post.map(res => {
                    return (
                        <section id="post-list">
                            <article>
                                <header>
                                    <div className="user-info">
                                        <span>Teste</span>
                                        <span className="place">São Paulo</span>
                                    </div>
                                    <img src={more} alt="Mais" />
                                </header>
            
                                <img src={res.img} alt="One" />
                                <footer>
                                    <div className="actions">
                                        <img src={like} alt="" />
                                        <img src={comment} alt="" />
                                        <img src={send} alt="" />
                                    </div>
                                    <strong>900 curtidas</strong>
            
                                    <p>Um post muito massa da Omnistack <span>#React #omnistack #top</span></p>
                                </footer>
                            </article>
                        </section>
                    )
                })}
            </>
        ) 
    }
}

export default Feed