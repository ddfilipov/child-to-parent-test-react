import React, { useEffect, useState } from "react";
import players from "./data.json";
import { Child } from "./Child";
import styled from "styled-components";

const Container = styled.div`
    border: 1px solid black;
    margin: 10px;
`;

export const Parent = () => {
    const [selectedPlayers, setSelectedPlayers] = useState(0);

    function updateSelectedPlayers(){
        setSelectedPlayers(1);
    }

    return (
        <Container>
            <h2>Players</h2>
            {players.map((player) => (
                <Child player={player} key={player.id} />
            ))}
            <div>
                <label>New Team: </label>
                <input type="text"></input>
                <button>Modify</button>
                <span>Players selected: {selectedPlayers}</span>
            </div>
        </Container>
    );
};
