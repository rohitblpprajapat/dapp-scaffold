// Next, React
import { FC, useEffect, useState } from 'react';
import Link from 'next/link';

// Wallet
import { useWallet, useConnection } from '@solana/wallet-adapter-react';

// Components
import { RequestAirdrop } from '../../components/RequestAirdrop';
import pkg from '../../../package.json';

// Store
import useUserSOLBalanceStore from '../../stores/useUserSOLBalanceStore';

export const HomeView: FC = ({ }) => {
  const wallet = useWallet();
  const { connection } = useConnection();

  const balance = useUserSOLBalanceStore((s) => s.balance)
  const { getUserSOLBalance } = useUserSOLBalanceStore()

  useEffect(() => {
    if (wallet.publicKey) {
      console.log(wallet.publicKey.toBase58())
      getUserSOLBalance(wallet.publicKey, connection)
    }
  }, [wallet.publicKey, connection, getUserSOLBalance])

  return (
    <>
  
  <header className="bg-cover bg-center h-screen" style={{backgroundImage:'url("assets/img/guerrillabuzz-mBn1XzGRe9k-unsplash.jpg")'}}>
    <div className="intro-body">
      <div className="">
        <div className="grid place-content-center md:pt-6 ">
          <div className="">
          <h1 className="text-center text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-indigo-500 to-teal-400 mt-10 mb-8">
          Sol-Share
        </h1>
            <p className="text-2xl ">
              Welcome to SolShare - Your Gateway to Secure and Efficient
              Decentralized File Sharing!
            </p>
            <a className="btn btn-link btn-circle" role="button" href="#about">
              <i className="fa fa-angle-double-down animated" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </header>
  <section className="md:hero  text-center content-section h-96" id="about">
    <div className="container">
      <div className="row">
        <div className="col-lg-8 mx-auto">
          <h2 className='text-6xl'>Discover the Future of File Sharing</h2>
          <p className='pt-5'>
            In a world driven by innovation, where privacy and security are
            paramount, we proudly present SolShare, a groundbreaking
            decentralized file sharing platform built on the Solana blockchain.
            With SolShare, we've reimagined file sharing, putting you in control
            of your data while delivering unprecedented speed and reliability.
          </p>
          <p />
          <p />
        </div>
      </div>
    </div>
  </section>
  <section className="md:hero text-center download-section content-section h-96" id="download" style={{backgroundImage: 'url("assets/img/nasa-Q1p7bh3SHj8-unsplash.jpg")'}}>
    <div className="container">
      <div className="col-lg-8 mx-auto">
        <h1 className='text-6xl'>Start file sharing</h1>
        <p>
          Ready to experience the next generation of file sharing? Sign up for
          SolanaShare now and take control of your data like never before.
        </p>
        <button className="btn btn-primary btn-lg btn-default" type="button">
          Connect Wallet
        </button>
      </div>
    </div>
  </section>
  <section id="contact" className=" md:hero text-center content-section h-96">
    <div className="container">
      <div className="row">
        <div className="col-lg-8 mx-auto items-center">
          <h2 className='text-6xl text-bold'>Contact us</h2>
          <p>Empowering Seamless Sharing, One Block at a Time.</p>
          <ul className="flex flex-row">
            <li className="">
              <button className="btn btn-primary btn-lg btn-default" type="button">Mail</button>
            </li>
            <li className="">
              <button
                className="btn btn-primary btn-lg btn-default"
                type="button"
              >
                <i className="fa fa-twitter fa-fw" />
                <span className="network-name">&nbsp;Twitter</span>
              </button>
            </li>
            <li className="">
              <button
                className="btn btn-primary btn-lg btn-default"
                type="button"
              >
                <i className="fa fa-github fa-fw" />
                <span className="network-name">&nbsp;github</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  


    {/* <div className="md:hero mx-auto p-4">
      <div className="md:hero-content flex flex-col">
        <div className='mt-6'>
        <div className='text-sm font-normal align-bottom text-right text-slate-600 mt-4'>v{pkg.version}</div>
        <h1 className="text-center text-5xl md:pl-12 font-bold text-transparent bg-clip-text bg-gradient-to-br from-indigo-500 to-fuchsia-500 mb-4">
          Solana Next
        </h1>
        </div>
        <h4 className="md:w-full text-2x1 md:text-4xl text-center text-slate-300 my-2">
          <p>Unleash the full power of blockchain with Solana and Next.js 13.</p>
          <p className='text-slate-500 text-2x1 leading-relaxed'>Full-stack Solana applications made easy.</p>
        </h4>
        <div className="relative group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-indigo-500 rounded-lg blur opacity-40 animate-tilt"></div>
          <div className="max-w-md mx-auto mockup-code bg-primary border-2 border-[#5252529f] p-6 px-10 my-2">
            <pre data-prefix=">">
              <code className="truncate">{`npx create-solana-dapp <dapp-name>`} </code>
            </pre>
          </div>
        </div>
        <div className="flex flex-col mt-2">
          <RequestAirdrop />
          <h4 className="md:w-full text-2xl text-slate-300 my-2">
          {wallet &&
          <div className="flex flex-row justify-center">
            <div>
              {(balance || 0).toLocaleString()}
              </div>
              <div className='text-slate-600 ml-2'>
                SOL
              </div>
          </div>
          }
          </h4>
        </div>
      </div>
    </div> */}
    </>
  );
};
