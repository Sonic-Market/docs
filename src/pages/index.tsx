import './styles.module.css'

import Link from '@docusaurus/Link'
import useBaseUrl from '@docusaurus/useBaseUrl'
import styled from '@emotion/styled'
import GitHub from '@site/static/img/github.svg'
import Layout from '@theme/Layout'
import ThemedImage from '@theme/ThemedImage'
import React from 'react'
import {
  ArrowUpRight as LinkIcon,
  BookOpen,
  Info,
  MessageCircle,
  ArrowRightCircle,
} from 'react-feather'
import SearchBarWithAnalytics from '@site/src/theme/SearchBar'

export const actions = [
  {
    title: 'Technical Paper',
    icon: Info,
    to: '/concepts/overview',
    text: `Learn about the core concepts of the Clober, Segmented Segment Tree, Octopus Heap and more.`,
  },
  {
    title: 'The Clober smart contracts',
    icon: BookOpen,
    to: '/contracts/overview',
    text: `Learn about the architecture of the Clober smart contracts through guided examples.`,
  },
  {
    title: 'Trade Now!',
    icon: ArrowRightCircle,
    to: 'https://beta.clober.io',
    text: `Place limit orders on our fully on-chain order book. Have CEX on DEX!`,
  },
]

export const developerLinks = [
  {
    title: 'clober-core',
    href: 'https://github.com/clober-dex/core',
    icon: GitHub,
  },
  {
    title: 'clober-library',
    href: 'https://github.com/clober-dex/library',
    icon: GitHub,
  },
  {
    title: 'clober-docs',
    href: 'https://github.com/clober-dex/docs',
    icon: GitHub,
  },
]

export const dAppGuides = [
  {
    title: 'Setup your environment',
    text: 'Prepare your local environment by installing the required dependencies',
    to: '/sdk/v3/guides/quick-start',
  },
  {
    title: 'Fetch token prices',
    text: 'Fetch the price of tokens in a specific Pool',
    to: '/sdk/v3/guides/fetching-prices',
  },
  {
    title: 'Create a Trade',
    text: 'Fetch a Quote for a Trade and execute the Trade',
    to: '/sdk/v3/guides/creating-a-trade',
  },
  {
    title: 'Route trades',
    text: 'Use Routing to get optimized prices for your Trades',
    to: '/sdk/v3/guides/auto-router',
  },
  {
    title: 'Provide liquidity',
    text: "Contribute to a Pool's liquidity by using tokens to earn fees",
    to: '/sdk/v3/guides/liquidity/minting',
  },
  {
    title: 'UI Component',
    text: 'Integrate with the Swap Widget, a React component that works out of the box ',
    to: '/sdk/swap-widget/overview',
  },
]
export const smartContractGuides = [
  {
    title: 'Setup your environment',
    text: 'Prepare your local environment by installing the required dependencies',
    to: '/contracts/v3/guides/local-environment',
  },
  {
    title: 'Implement a Swap',
    text: 'Start swapping from a smart contract in Solidity',
    to: '/contracts/v3/guides/swaps/single-swaps',
  },
  {
    title: 'Provide Liquidity',
    text: 'Provide liquidity from a smart contract in Solidity',
    to: '/contracts/v3/guides/providing-liquidity/setting-up',
  },
  {
    title: 'Mine Liquidity',
    text: 'Start Mining liquidity from a smart contract in Solidity',
    to: '/contracts/v3/guides/liquidity-mining/overview',
  },
  {
    title: 'Implement Flash Swaps',
    text: 'Implement Flash Swaps from a smart contract in Solidity',
    to: '/contracts/v3/guides/flash-integrations/inheritance-constructors',
  },
]

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`

const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 16px;
  justify-content: center;
  margin: 0 auto;
  padding: 1rem 0;
  max-width: 960px;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
    padding: 1rem;
    max-width: 100%;
    margin: 0 1rem;
  }
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`

const TwoRow = styled(Row)`
  grid-template-columns: 1fr 1fr;
  grid-gap: 48px;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
  }
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`

const Card = styled.div`
  display: flex;
  max-height: 250px;
  min-width: 350px;
  padding: 1rem;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
  border: 1px solid transparent;
  border-radius: 20px;
  border: 1px solid var(--ifm-color-emphasis-200);
  /* flex: 1 1 0px; */

  &:hover {
    border: 1px solid var(--ifm-color-emphasis-400);
    box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.05);
  }

  @media (max-width: 960px) {
    width: 100%;
  }
`

const CenterCard = styled(Card)`
  min-width: 250px;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;

  display: grid;
  grid-template-columns: 48px 1fr;
  gap: 24px;

  h3 {
    margin-bottom: 0.25rem;
  }

  p {
    margin-bottom: 0px;
  }
`

const ShadowCard = styled(Card)`
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.05);
  background-color: #ffffff10;
  backdrop-filter: blur(10px);
  min-height: 200px;
  /* background-color: var(--ifm-color-emphasis-0); */
`

const IconWrapper = styled.div`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  margin-right: 0.5rem;
`

const LinkIconWrapper = styled.div`
  opacity: 0.25;
`

const TopSection = styled.div`
  width: 100%;
  align-items: center;
  justify-content: space-between;
  display: flex;
  flex-direction: row;
  margin-bottom: 1rem;
`

const LinkRow = styled.div`
  width: 100%;
  align-items: center;
  justify-content: space-between;
  display: flex;
  flex-direction: row;
  a h3 {
    color: black !important;
  }
`

const DocsHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  width: 100%;
  position: relative;
`

const StyledImage = styled(ThemedImage)`
  position: relative;
  z-index: -1;
  width: 100%;
  object-fit: cover;
`

const StyledTitleImage = styled(StyledImage)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
  position: absolute;
  opacity: 0.2;
  overflow: hidden;
  mask-image: linear-gradient(rgba(0, 0, 0, 1), transparent);
`

const HideMedium = styled.div`
  @media (max-width: 960px) {
    display: none;
  }
`

const StyledIcon = styled.div`
  svg {
    fill: var(--ifm-font-color-base);
  }
`
export default function Home() {
  return (
    <Layout
      title={`Clober Docs`}
      description="Technical Documentation For The Clober Protocol"
    >
      <Container>
        <DocsHeader>
          <div
            style={{
              padding: '4rem 0  ',
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <h1 style={{ fontWeight: 600 }}> Welcome to Clober Docs</h1>
            <HideMedium>
              <SearchBarWithAnalytics />
            </HideMedium>
          </div>
          <Row>
            {actions.map((action) => (
              <Link
                style={{ textDecoration: 'none' }}
                to={action.to}
                key={action.to}
              >
                <ShadowCard key={action.title}>
                  <TopSection>
                    <IconWrapper>
                      <action.icon style={{ width: '24px' }} />
                    </IconWrapper>
                    <LinkIconWrapper>
                      <LinkIcon />
                    </LinkIconWrapper>
                  </TopSection>
                  <h3 style={{ marginBottom: '.75rem', fontWeight: 500 }}>
                    {action.title}
                  </h3>
                  <p style={{ marginBottom: '0.5rem', fontWeight: 300 }}>
                    {action.text}
                  </p>
                </ShadowCard>
              </Link>
            ))}
          </Row>
        </DocsHeader>
        <StyledTitleImage
          sources={{
            light: useBaseUrl('/img/grow.png'),
            dark: useBaseUrl('/img/grow2.png'),
          }}
        />
        <hr />
        <TwoRow
          style={{
            gap: '48px',
            alignItems: 'center',
          }}
        >
          <StyledImage
            style={{ maxHeight: '400px' }}
            sources={{
              light: useBaseUrl(''),
              dark: useBaseUrl(''),
            }}
          />
          <div>
            <h2>Developer Links</h2>
            {developerLinks.map((action) => (
              <Link key={action.href} to={action.href}>
                <Card key={action.href} style={{ marginBottom: '0.5rem' }}>
                  <LinkRow>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <IconWrapper>
                        <StyledIcon>
                          <action.icon style={{ width: '24px' }} />
                        </StyledIcon>
                      </IconWrapper>
                      {action.title}
                    </div>
                    <LinkIconWrapper>
                      <LinkIcon />
                    </LinkIconWrapper>
                  </LinkRow>
                </Card>
              </Link>
            ))}
          </div>
        </TwoRow>
      </Container>
    </Layout>
  )
}
