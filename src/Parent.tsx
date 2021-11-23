import React, { useEffect, useState } from "react";
import players from "./data.json";
import { Child } from "./Child";
import styled from "styled-components";

const Container = styled.div`
    border: 1px solid black;
    margin: 10px;
`;

export const Parent = () => {
    const [selectedPlayers, setSelectedPlayers] = useState<number[]>([]);
    const [buttonDisabled, setButtonDisabled] = useState(true);

    const selectPlayer = (selected: boolean, playerId: number) => {
        if (selected) {
            setSelectedPlayers((oldList) => [...oldList, playerId]);
        } else {
            setSelectedPlayers(selectedPlayers.filter((player) => player !== playerId));
        }
        console.log(selectedPlayers);
    };

    useEffect(() => {
        setButtonDisabled(selectedPlayers.length > 0 ? false : true);
    }, [selectedPlayers]);

    return (
        <Container>
            <h2>Players</h2>
            {players.map((player) => (
                <Child playerAttrs={player} key={player.id} selectPlayer={selectPlayer} />
            ))}
            <div>
                <label>New Team: </label>
                <input type="text"></input>
                <button disabled={buttonDisabled}>Modify</button>
                <span>Players selected: {selectedPlayers.length}</span>
            </div>
        </Container>
    );
};
