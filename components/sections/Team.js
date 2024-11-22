'use client'
import React from 'react'
import team from '../../data/team.json'
const Team = () => {
    return (
        <div>
            <section>
                <h1 class="title">our team</h1>
                <div class="team-row">
                    {
                        team?.map((member, index) => (<div class="member">
                            <img src={member?.avatar} alt="" />
                            <h2>{member?.name}</h2>
                            <p style={{fontSize:'17px'}}>{member.position}</p>
                            {/* <p>{member?.about}</p> */}
                        </div>))
                    }

                </div>
            </section>
        </div>
    )
}

export default Team
