import styled from "styled-components";
import { Png } from "@assets/png";
import Image from "next/image";
import { Text } from "../Text";
const { ProfilePic } = Png;

const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    margin: 2.25rem 0;
    img {
        border: ${({ theme }) => `1px solid ${theme.colors.primary}`};
        padding: 1px;
        width: 5rem;
        height: 5rem;
        border-radius: 50%;
        object-fit: fill;
        margin-bottom: 1.2rem;
    }
`;

type AvatarProps = {
    name: string;
    profileImage?: string;
};

export const Avatar = ({ name = "Johnny Cage", profileImage }: AvatarProps) => {
    return (
        <Container data-component={"Avatar"}>
            <Image src={profileImage ?? ProfilePic} alt={"user profile"} width={64} height={64} />
            <Text variant="body4" weight={"bold"}>
                {name}
            </Text>
        </Container>
    );
};
