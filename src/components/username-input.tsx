"use client";

import React, { useState } from 'react';
import axios from 'axios';
import { Button } from './ui/button';
import { Input } from './ui/input';

export default function UsernameInput({ update }: { update: (data: { username: string, skinUrl: string, levels: { [key: string]: number }, xps: { [key: string]: number } }) => void }) {

    const [username, setUsername] = useState('');

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        setUsername(event.target.value);
    }

    function handleSubmit() {

        axios.get(`https://api.ashcon.app/mojang/v2/user/${username}`)
            .then(response => {
                const skinUrl = response.data.textures.skin.url;


                axios.get(`https://api.paladium.games/v1/paladium/player/profile/${username}`)
                    .then(response => {
                        const data = response.data;
                        const jobLevels = {
                            alchemist: data.jobs.alchemist ? data.jobs.alchemist.level : 0,
                            farmer: data.jobs.farmer ? data.jobs.farmer.level : 0,
                            hunter: data.jobs.hunter ? data.jobs.hunter.level : 0,
                            miner: data.jobs.miner ? data.jobs.miner.level : 0,
                        };
                        const jobXps = {
                            alchemist: data.jobs.alchemist ? data.jobs.alchemist.xp : 0,
                            farmer: data.jobs.farmer ? data.jobs.farmer.xp : 0,
                            hunter: data.jobs.hunter ? data.jobs.hunter.xp : 0,
                            miner: data.jobs.miner ? data.jobs.miner.xp : 0,
                        };
                        update({ username: data.username, skinUrl: skinUrl, levels: jobLevels, xps: jobXps });
                    })
                    .catch(error => {
                        console.error('Error fetching profile:', error);
                    });
            })
            .catch(error => {
                console.error('Error fetching Mojang profile:', error);
            });
    }

    return (
        <div className="flex justify-center">
            <div className="mt-16 max-w-sm flex w-full">
                <UsernameField handleChange={handleChange} value={username} />
                <SubmitButton handleSubmit={handleSubmit} />
            </div>
        </div>
    );
}

function UsernameField({ handleChange, value }: { handleChange: React.ChangeEventHandler<HTMLInputElement>, value: string }) {
    return (
        <Input
            type="email"
            placeholder="Enter your Minecraft account username..."
            value={value}
            className='mr-2'
            onChange={handleChange}
        />
    );
}

function SubmitButton({ handleSubmit }: { handleSubmit: () => void }) {
    return (
        <Button
            type="submit"
            onClick={handleSubmit}
        >
            Confirm
        </Button>
    );
}