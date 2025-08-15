"use client";
import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
html,
body {
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    font-size: 1rem;
	font-family: ${({ theme }) => theme.fontFamily.onest};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

	[class^="ant-"], [class*=" ant-"] {
		font-family: inherit !important;
	}
}

a {
    color: inherit;
    text-decoration: none;
}
.ant-notification-notice-wrapper{
	.ant-notification-notice {
		padding: 20px !important;
		&::before{
			content: "";
			height: 100%;
			position: absolute;
			left: 0;
			width: 4px;
			top: 0;
			border-top-left-radius: 4px;
			border-bottom-left-radius: 4px;
		
		}
	}
	.ant-notification-notice-success{
			&::before{
				
				background: ${({ theme }) => theme.colors.green};
			}
		}
		.ant-notification-notice-warning{
				&::before{
				background: #F3A218;
			}
			
		}
		.ant-notification-notice-error{
				&::before{
				background: ${({ theme }) => theme.colors.red};
			}
		}
		.ant-notification-notice-info{
				&::before{
				background: ${({ theme }) => theme.colors.primary};
			}
		}
	
	
}


`;
