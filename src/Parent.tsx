import React, { useEffect, useState } from "react";
import { Child } from "./Child";
import styled from "styled-components";
import Player from "./gateways/player.gateway";

const Container = styled.div`
    border: 1px solid black;
    margin: 10px;
    padding: 10px;
    span {
        display: block;
    }
`;

export const Parent = () => {
    const [players, setPlayers] = useState(Player.getListOfPlayers);
    const [selectedPlayers, setSelectedPlayers] = useState<number[]>([]);
    const [buttonDisabled, setButtonDisabled] = useState(true);

    const selectPlayer = (selected: boolean, playerId: number) => {
        if (selected) {
            setSelectedPlayers((oldList) => [...oldList, playerId]);
        } else {
            setSelectedPlayers(selectedPlayers.filter((player) => player !== playerId));
        }
        console.log("saliendo de selectPlayer");
        console.log(selectedPlayers);
    };

    const modifyFirstPlayerTeam = () => {};

    useEffect(() => {
        console.log("entrando en useEffect")
        console.log(selectedPlayers);
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
                <button disabled={buttonDisabled} onClick={modifyFirstPlayerTeam}>
                    Modify
                </button>
                <span>Players selected: {selectedPlayers.length}</span>
            </div>
        </Container>
    );
};
