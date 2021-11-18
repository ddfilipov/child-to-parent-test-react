import React, { useEffect } from "react";
import players from "./data.json";
import { Child } from "./Child";
import styled from "styled-components";

const Container = styled.div`
    border: 1px solid black;
    margin: 10px;
`;

export const Parent = () => {
    return (
        <Container>
            <h2>Jugadores</h2>
            {players.map((player) => (
                <Child player={player} key={player.id} />
            ))}
            <div>
                <label>Nuevo Equipo: </label>
                <input type="text"></input>
                <button>Modificar</button>
            </div>
        </Container>
    );
};
