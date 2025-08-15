import styled from "styled-components";

export const LayoutContainer = styled.div`
    background: ${({ theme }) => theme.colors.accent};
    display: flex;
    align-items: center;
    height: 100%;
    width: 100%;
    overflow: hidden;
    font-family: ${({ theme }) => theme.fontFamily.onest};
`;

export const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
`;

export const FormHeading = styled.div`
    margin-bottom: 2rem;
`;

export const SignupContent = styled.div`

    @media screen and (max-width: 640px) {
        height: 100%;
        display: flex;
        justify-content: center;
        margin-top: 3rem;
        .ant-row {
            width: 100%;
        }
    }
`;
