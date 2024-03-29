import React, { useContext, useState } from "react";
import styled, { css } from "styled-components";
import { MdAdd } from "react-icons/md";
import { TodoDispatchContext, TodoNextIdContext } from "../contexts/TodoContext";

const CircleButton = styled.button`
    background: #38d9a9;

    &:hover {
        background: #63e6be;
    }
    &:active {
        background: #20c997;
    }

    z-index: 5;
    cursor: pointer;
    width: 80px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 60px;
    position: absolute;
    // 왼쪽 마진을 50%주고
    left: 50%;
    // 현재 위치에서 -50%만큼 x축 이동
    transform: translate(-50%, 0);
    bottom: 0px;
    color: white;
    border-radius: 50%;
    border: none;
    outline: none;

    transition: 0.125s all ease-in;

    ${props =>
        props.open && css`
            background: #ff6b6b;
            &:hover {
                background: #ff8787;
            }
            &:active {
                background: #fa5252;
            }
            transform: translate(-50%, 25%) rotate(45deg);
        `
    }
`;

const InsertFormPositioner = styled.div`
    width: 100%;
    bottom: 0;
    left: 0;
    position: absolute;
`;

const InsertForm = styled.form`
    background: #f8f9fa;
    padding-left: 32px;
    padding-top: 32px;
    padding-right: 32px;
    padding-bottom: 72px;

    border-bottom-left-radius: 16px;
    border-bottom-right-radius: 16px;
    border-top: 1px solid #e9ecef;
`;

const Input = styled.input`
    padding: 12px;
    border-radius: 4px;
    border: 1px solid #dee2e6;
    width: 100%;
    outline: none;
    font-size: 18px;
    box-sizing: border-box;
`;

const TodoCreate = () => {
    console.log("create rendering!!");
    const [open, setOpen] = useState(false);
    const onToggle = () => setOpen(!open);
    let [inputValue, setInputValue] = useState("")

    const dispatch = useContext(TodoDispatchContext);
    const nextId = useContext(TodoNextIdContext);

    const onCreate = (e) => {
        e.preventDefault();
        dispatch({
            type: 'CREATE',
            todo: {
                id: nextId.current++,
                text: inputValue,
                done: false,
            }
        })
        setInputValue("");
        setOpen(false);
    };

    return (
        <>
            {open && (
                <InsertFormPositioner>
                    <InsertForm onSubmit={onCreate}>
                        <Input
                            value={inputValue}
                            autoFocus
                            placeholder="할 일을 입력 후, Enter를 누르세요"
                            onChange={(event) => setInputValue(event.target.value)}>
                        </Input>
                    </InsertForm>
                </InsertFormPositioner>
            )}
            <CircleButton onClick={onToggle} open={open}>
                <MdAdd />
            </CircleButton>
        </>
    );
}

export default React.memo(TodoCreate);