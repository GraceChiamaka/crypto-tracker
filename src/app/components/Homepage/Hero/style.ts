import styled from "styled-components";

export const HeroContainer = styled.div`
    background: ${({ theme }) => theme.colors.background};
    padding: ${({ theme }) => theme.spacing.double(10, 5)};
    padding-top: ${({ theme }) => theme.spacing.custom(10)};

    ${({ theme }) => theme.media.smallLaptop} {
        padding: ${({ theme }) => theme.spacing.double(4, 2)};
    }
    ${({ theme }) => theme.media.tablet} {
        padding: ${({ theme }) => theme.spacing.double(4, 2)};
    }
    ${({ theme }) => theme.media.mobile} {
        padding: ${({ theme }) => theme.spacing.double(4, 1.5)};
    }
`;

export const HeroSection = styled.div`
    background: ${({ theme }: any) => theme.colors.background};
    padding: ${({ theme }) => theme.spacing.double(0, 8)};
    ${({ theme }) => theme.media.customDesktop(1600)} {
        padding: ${({ theme }) => theme.spacing.double(0, 12)};
    }
    ${({ theme }) => theme.media.smallLaptop} {
        padding: ${({ theme }) => theme.spacing.double(4, 3)};
        .backdrop {
            width: 100%;
            height: auto;
        }
    }
    ${({ theme }) => theme.media.tablet} {
        padding: ${({ theme }) => theme.spacing.double(4, 2)};
        .backdrop {
            width: 100%;
            height: auto;
        }
    }
    ${({ theme }) => theme.media.mobile} {
        padding: ${({ theme }) => theme.spacing.double(4, 1.5)};
        .backdrop {
            width: 100%;
            height: auto;
        }
    }
`;

export const ButtonRow = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    margin-top: 1rem;
`;

export const Backdrop = styled.div<{ img: any }>`
    background-image: ${({ img }) => `url(${img.src})`};
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 440px;

    ${({ theme }) => theme.media.extraLargeLaptop} {
        height: 360px;
    }
    ${({ theme }) => theme.media.customDesktop(1400)} {
        height: 434px;
    }
    ${({ theme }) => theme.media.tablet} {
        height: 410px;
        margin-top: 1rem;
        background-size: contain;
    }
`;
