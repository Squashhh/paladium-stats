"use client";

import * as React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import Image from "next/image";
import ReactSkinview3d from "react-skinview3d";
import UsernameInput from "@/components/username-input";
import { useState } from 'react';
import { Button } from "@/components/ui/button"
import { xpsMiner, xpsFarmer, xpsAlchemist, xpsHunter } from '@/lib/utils/jobs';

export default function Jobs() {

    const [userData, setUserData] = useState({
        username: '???',
        skinUrl: '/imgs/default_skin.png',
        jobLevels: {
            alchemist: 0,
            farmer: 0,
            hunter: 0,
            miner: 0,
        },
        jobXps: {
            alchemist: 0,
            farmer: 0,
            hunter: 0,
            miner: 0,
        },
    });

    function update(data: { username: string, skinUrl: string, levels: { [key: string]: number }, xps: { [key: string]: number } }) {
        const { username, skinUrl, levels, xps } = data;

        setUserData(prevData => ({
            ...prevData,
            username: username,
            skinUrl: skinUrl,
            jobLevels: {
                ...prevData.jobLevels,
                ...levels
            },
            jobXps: {
                ...prevData.jobXps,
                ...xps
            }
        }));
    }

    return (
        <main className=" flex-col flex justify-center h-screen">
            <div className="flex justify-around inline-block">

                <Card className="w-[300px] h-fit">
                    <CardHeader className="text-center">
                        <CardTitle>{userData.username}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex justify-center">
                        <ReactSkinview3d
                            skinUrl={userData.skinUrl}
                            height="256"
                            width="256"
                        />
                    </CardContent>
                </Card>


                <Card className="w-[350px] h-fit">
                    <CardHeader>
                        <CardTitle>Miner</CardTitle>
                        <CardDescription>{`Level ${userData.jobLevels.miner}`}</CardDescription>

                    </CardHeader>

                    <CardContent className="flex flex-col items-center">
                        <Image src="/imgs/miner.png" alt="Image" className="rounded-md object-cover" width={128} height={128} />
                        <CardDescription>{userData.jobXps.miner}xp</CardDescription>
                    </CardContent>
                    <CardFooter>
                        {userData.jobLevels.miner && userData.jobXps.miner ? (
                            (() => {
                                const niveauActuel = xpsMiner.find(niveau => niveau.level === userData.jobLevels.miner);
                                if (niveauActuel) {
                                    if (userData.jobLevels.miner === 100 && userData.jobXps.miner > niveauActuel.xps) {
                                        return <Progress value={0} className="bg-emerald-500" />;
                                    } else {
                                        return <Progress value={(userData.jobXps.miner / niveauActuel.xps) * 100} />;
                                    }
                                } else {
                                    console.log("Niveau non trouvé dans l'array niveauxXP");
                                    return <Progress value={0} />;
                                }
                            })()
                        ) : (
                            <Progress value={0} />
                        )}
                    </CardFooter>

                </Card>

                <Card className="w-[350px] h-fit">
                    <CardHeader>
                        <CardTitle>Farmer</CardTitle>
                        <CardDescription>{`Level ${userData.jobLevels.farmer}`}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex flex-col items-center">
                        <Image src="/imgs/farmer.png" alt="Image" className="rounded-md object-cover" width={128} height={128} />
                        <CardDescription>{userData.jobXps.farmer}xp</CardDescription>
                    </CardContent>
                    <CardFooter>
                        {userData.jobLevels.farmer && userData.jobXps.farmer ? (
                            (() => {
                                const niveauActuel = xpsFarmer.find(niveau => niveau.level === userData.jobLevels.farmer);
                                if (niveauActuel) {
                                    if (userData.jobLevels.farmer === 100 && userData.jobXps.farmer > niveauActuel.xps) {
                                        return <Progress value={0} className="bg-emerald-500" />;
                                    } else {
                                        return <Progress value={(userData.jobXps.farmer / niveauActuel.xps) * 100} />;
                                    }
                                } else {
                                    console.log("Niveau non trouvé dans l'array niveauxXP");
                                    return <Progress value={0} />;
                                }
                            })()
                        ) : (
                            <Progress value={0} />
                        )}
                    </CardFooter>
                </Card>

                <Card className="w-[350px] h-fit">
                    <CardHeader>
                        <CardTitle>Alchemist</CardTitle>
                        <CardDescription>{`Level ${userData.jobLevels.alchemist}`}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex flex-col items-center">
                        <Image src="/imgs/alchimiste.png" alt="Image" className="rounded-md object-cover" width={128} height={128} />
                        <CardDescription>{userData.jobXps.alchemist}xp</CardDescription>
                    </CardContent>
                    <CardFooter>
                        {userData.jobLevels.alchemist && userData.jobXps.alchemist ? (
                            (() => {
                                const niveauActuel = xpsAlchemist.find(niveau => niveau.level === userData.jobLevels.alchemist);
                                if (niveauActuel) {
                                    if (userData.jobLevels.alchemist === 100 && userData.jobXps.alchemist > niveauActuel.xps) {
                                        return <Progress value={0} className="bg-emerald-500" />;
                                    } else {
                                        return <Progress value={(userData.jobXps.alchemist / niveauActuel.xps) * 100} />;
                                    }
                                } else {
                                    console.log("Niveau non trouvé dans l'array niveauxXP");
                                    return <Progress value={0} />;
                                }
                            })()
                        ) : (
                            <Progress value={0} />
                        )}
                    </CardFooter>
                </Card>

                <Card className="w-[350px] h-fit">
                    <CardHeader>
                        <CardTitle>Hunter</CardTitle>
                        <CardDescription>{`Level ${userData.jobLevels.hunter}`}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex flex-col items-center">
                        <Image src="/imgs/hunter.png" alt="Image" className="rounded-md object-cover" width={128} height={128} />
                        <CardDescription>{userData.jobXps.hunter}xp</CardDescription>
                    </CardContent>
                    <CardFooter>
                        {userData.jobLevels.hunter && userData.jobXps.hunter ? (
                            (() => {
                                const niveauActuel = xpsHunter.find(niveau => niveau.level === userData.jobLevels.hunter);
                                if (niveauActuel) {
                                    if (userData.jobLevels.hunter === 100 && userData.jobXps.hunter > niveauActuel.xps) {
                                        return <Progress value={0} className="bg-emerald-500" />;
                                    } else {
                                        return <Progress value={(userData.jobXps.hunter / niveauActuel.xps) * 100} />;
                                    }
                                } else {
                                    console.log("Niveau non trouvé dans l'array niveauxXP");
                                    return <Progress value={0} />;
                                }
                            })()
                        ) : (
                            <Progress value={0} />
                        )}
                    </CardFooter>
                </Card>
            </div>

            <UsernameInput update={update} />

            <div className="fixed bottom-0 w-full">
                <p className="text-white text-center py-4">Made with ❤️ by <a href="https://github.com/Squashhh">
                    <Button variant="link">Squash</Button>
                </a>
                </p>
            </div>

        </main>
    );
}