import { FC } from "react";
import styled from "styled-components";

interface Player {
    name: string;
    team: string;
    age: number;
    id: number;
}

interface ChildProps {
    playerAttrs: Player;
    selectPlayer(selected: boolean, playerId: number): void;
}

const Container = styled.div`
    background-color: #f5efef;
    margin: 10px;
`;

const CustomCheckbox = styled.div`
    overflow: hidden;
    position: relative;
    display: inline-block;
    > input {
        position: absolute;
        left: -100px;
        top: -100px;
    }
    > label {
        position: relative;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
    }
    > label:before {
        content: "";
        display: inline-block;
        width: 1rem;
        height: 1rem;
        border: 1px solid black;
    }
    > input:focus + label:before {
        box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
    }
    > input:checked + label {
        &:before {
            border-color: red;
        }
        &:after {
            position: absolute;
            left: 0;
            bottom: 0;
            content: "";
            width: 1.4rem;
            height: 1.5rem;
            background-color: red;
            // x-y
            //                 1x  1y   2x  2y   3x  3y   4x 4y   5x  5y   6x  6y
            clip-path: polygon(58% 34%, 72% 42%, 44% 92%, 10% 68%, 20% 56%, 38% 69%);
        }
    }
`;

export const Child: FC<ChildProps> = ({ playerAttrs, selectPlayer }) => {
    const checkboxChecked = (e: any, playerId: number) => {
        const checked = e.target.checked;
        selectPlayer(checked, playerId);
    };

    return (
        <Container>
            <ul>
                <li>Name: {playerAttrs.name}</li>
                <li>Age: {playerAttrs.age}</li>
                <li>Team: {playerAttrs.team}</li>
                <CustomCheckbox>
                    <input
                        type="checkbox"
                        name={"check" + playerAttrs.id}
                        id={"check" + playerAttrs.id}
                        onClick={(e) => {
                            checkboxChecked(e, playerAttrs.id);
                        }}
                    />
                    <label htmlFor={"check" + playerAttrs.id}></label>
                </CustomCheckbox>
            </ul>
        </Container>
    );
};
