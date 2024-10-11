import styled from 'styled-components';

export const FeedbackFormContainer = styled.div`
    width: 100%;
    margin-bottom: 40px;
    padding: 40px 15%;
    border-radius: 12px;
    background-color: var(--background-primary-weak);
    text-align: center;

    & h2:last-child {
        margin-bottom: 0;
    }

    & form {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    & input,
    & textarea {
        width: 100%;
        max-width: 600px;
        padding: 10px;
        border: 2px solid #888;
        border-radius: 8px;
        font-size: 16px;
        line-height: 20px;
    }

    & textarea {
        min-height: 100px;
        font-family: Arial;
    }

    & button {
        min-width: 100px;
        padding: 10px 20px;
        border-radius: 6px;
        border: none;
        background-color: #22a;
        color: #fff;
        font-size: 20px;
        line-height: 30px;
        cursor: pointer;
        transition: all 200ms ease-in-out;

        &:hover {
            background-color: #008;
        }
    }
`;