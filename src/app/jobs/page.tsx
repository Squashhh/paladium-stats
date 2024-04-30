"use client";

import * as React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import Image from "next/image";
import ReactSkinview3d from "react-skinview3d";
import UsernameInput from "@/components/username-input";
import { useState } from 'react';
import { Button } from "@/components/ui/button"

export default function Jobs() {

    const xpsMiner = [
        { level: 0, xps: 480 },
        { level: 1, xps: 1044 },
        { level: 2, xps: 1713 },
        { level: 3, xps: 2497 },
        { level: 4, xps: 3408 },
        { level: 5, xps: 4451 },
        { level: 6, xps: 5635 },
        { level: 7, xps: 6966 },
        { level: 8, xps: 8447 },
        { level: 9, xps: 10086 },
        { level: 10, xps: 11885 },
        { level: 11, xps: 13850 },
        { level: 12, xps: 15883 },
        { level: 13, xps: 18290 },
        { level: 14, xps: 20773 },
        { level: 15, xps: 23435 },
        { level: 16, xps: 26281 },
        { level: 17, xps: 29312 },
        { level: 18, xps: 32532 },
        { level: 19, xps: 35943 },
        { level: 20, xps: 39549 },
        { level: 21, xps: 43351 },
        { level: 22, xps: 47353 },
        { level: 23, xps: 51556 },
        { level: 24, xps: 55964 },
        { level: 25, xps: 60577 },
        { level: 26, xps: 65399 },
        { level: 27, xps: 70432 },
        { level: 28, xps: 75677 },
        { level: 29, xps: 81137 },
        { level: 30, xps: 86813 },
        { level: 31, xps: 92709 },
        { level: 32, xps: 98824 },
        { level: 33, xps: 105162 },
        { level: 34, xps: 111724 },
        { level: 35, xps: 118512 },
        { level: 36, xps: 125527 },
        { level: 37, xps: 132772 },
        { level: 38, xps: 140248 },
        { level: 39, xps: 147956 },
        { level: 40, xps: 155898 },
        { level: 41, xps: 164076 },
        { level: 42, xps: 172492 },
        { level: 43, xps: 181146 },
        { level: 44, xps: 190040 },
        { level: 45, xps: 199176 },
        { level: 46, xps: 208555 },
        { level: 47, xps: 218179 },
        { level: 48, xps: 228049 },
        { level: 49, xps: 238166 },
        { level: 50, xps: 248532 },
        { level: 51, xps: 259148 },
        { level: 52, xps: 270015 },
        { level: 53, xps: 281135 },
        { level: 54, xps: 292509 },
        { level: 55, xps: 304138 },
        { level: 56, xps: 316023 },
        { level: 57, xps: 328166 },
        { level: 58, xps: 340568 },
        { level: 59, xps: 353230 },
        { level: 60, xps: 366153 },
        { level: 61, xps: 379339 },
        { level: 62, xps: 392788 },
        { level: 63, xps: 406502 },
        { level: 64, xps: 420482 },
        { level: 65, xps: 434728 },
        { level: 66, xps: 449243 },
        { level: 67, xps: 464027 },
        { level: 68, xps: 479081 },
        { level: 69, xps: 494407 },
        { level: 70, xps: 510004 },
        { level: 71, xps: 525875 },
        { level: 72, xps: 542021 },
        { level: 73, xps: 558442 },
        { level: 74, xps: 575140 },
        { level: 75, xps: 592115 },
        { level: 76, xps: 609368 },
        { level: 77, xps: 626901 },
        { level: 78, xps: 644714 },
        { level: 79, xps: 662809 },
        { level: 80, xps: 681186 },
        { level: 81, xps: 699846 },
        { level: 82, xps: 718791 },
        { level: 83, xps: 738021 },
        { level: 84, xps: 757537 },
        { level: 85, xps: 777339 },
        { level: 86, xps: 797430 },
        { level: 87, xps: 817810 },
        { level: 88, xps: 838479 },
        { level: 89, xps: 859439 },
        { level: 90, xps: 880690 },
        { level: 91, xps: 902234 },
        { level: 92, xps: 924071 },
        { level: 93, xps: 946202 },
        { level: 94, xps: 968628 },
        { level: 95, xps: 991349 },
        { level: 96, xps: 1014368 },
        { level: 97, xps: 1037683 },
        { level: 98, xps: 1061297 },
        { level: 99, xps: 1085210 },
        { level: 100, xps: 1109432 }
    ];
    
    const xpsFarmer = [
        { level: 0, xps: 480 },
        { level: 1, xps: 1044 },
        { level: 2, xps: 1713 },
        { level: 3, xps: 2497 },
        { level: 4, xps: 3408 },
        { level: 5, xps: 4451 },
        { level: 6, xps: 5635 },
        { level: 7, xps: 6966 },
        { level: 8, xps: 8447 },
        { level: 9, xps: 10086 },
        { level: 10, xps: 11885 },
        { level: 11, xps: 13850 },
        { level: 12, xps: 15983 },
        { level: 13, xps: 18290 },
        { level: 14, xps: 20773 },
        { level: 15, xps: 23435 },
        { level: 16, xps: 26281 },
        { level: 17, xps: 29312 },
        { level: 18, xps: 32532 },
        { level: 19, xps: 35943 },
        { level: 20, xps: 39549 },
        { level: 21, xps: 43351 },
        { level: 22, xps: 47353 },
        { level: 23, xps: 51556 },
        { level: 24, xps: 55964 },
        { level: 25, xps: 60577 },
        { level: 26, xps: 65399 },
        { level: 27, xps: 70432 },
        { level: 28, xps: 75677 },
        { level: 29, xps: 81137 },
        { level: 30, xps: 86813 },
        { level: 31, xps: 92709 },
        { level: 32, xps: 98824 },
        { level: 33, xps: 105162 },
        { level: 34, xps: 111724 },
        { level: 35, xps: 118512 },
        { level: 36, xps: 125527 },
        { level: 37, xps: 132772 },
        { level: 38, xps: 140248 },
        { level: 39, xps: 147956 },
        { level: 40, xps: 155898 },
        { level: 41, xps: 164076 },
        { level: 42, xps: 172492 },
        { level: 43, xps: 181146 },
        { level: 44, xps: 190040 },
        { level: 45, xps: 199176 },
        { level: 46, xps: 208555 },
        { level: 47, xps: 218179 },
        { level: 48, xps: 228049 },
        { level: 49, xps: 238166 },
        { level: 50, xps: 248532 },
        { level: 51, xps: 259148 },
        { level: 52, xps: 270015 },
        { level: 53, xps: 281135 },
        { level: 54, xps: 292509 },
        { level: 55, xps: 304138 },
        { level: 56, xps: 316023 },
        { level: 57, xps: 328166 },
        { level: 58, xps: 340568 },
        { level: 59, xps: 353230 },
        { level: 60, xps: 366153 },
        { level: 61, xps: 379339 },
        { level: 62, xps: 392788 },
        { level: 63, xps: 406502 },
        { level: 64, xps: 420482 },
        { level: 65, xps: 434728 },
        { level: 66, xps: 449243 },
        { level: 67, xps: 464027 },
        { level: 68, xps: 479081 },
        { level: 69, xps: 494407 },
        { level: 70, xps: 510004 },
        { level: 71, xps: 525875 },
        { level: 72, xps: 542021 },
        { level: 73, xps: 558442 },
        { level: 74, xps: 575140 },
        { level: 75, xps: 592115 },
        { level: 76, xps: 609368 },
        { level: 77, xps: 626901 },
        { level: 78, xps: 644714 },
        { level: 79, xps: 662809 },
        { level: 80, xps: 681186 },
        { level: 81, xps: 699846 },
        { level: 82, xps: 718791 },
        { level: 83, xps: 738021 },
        { level: 84, xps: 757537 },
        { level: 85, xps: 777339 },
        { level: 86, xps: 797430 },
        { level: 87, xps: 817810 },
        { level: 88, xps: 838479 },
        { level: 89, xps: 859439 },
        { level: 90, xps: 880690 },
        { level: 91, xps: 902234 },
        { level: 92, xps: 924071 },
        { level: 93, xps: 946202 },
        { level: 94, xps: 968628 },
        { level: 95, xps: 991349 },
        { level: 96, xps: 1014368 },
        { level: 97, xps: 1037683 },
        { level: 98, xps: 1061297 },
        { level: 99, xps: 1085210 },
        { level: 100, xps: 1109432 }
    ];
    
    const xpsAlchemist = [
        { level: 0, xps: 480 },
        { level: 1, xps: 1044 },
        { level: 2, xps: 1713 },
        { level: 3, xps: 2497 },
        { level: 4, xps: 3408 },
        { level: 5, xps: 4451 },
        { level: 6, xps: 5635 },
        { level: 7, xps: 6966 },
        { level: 8, xps: 8447 },
        { level: 9, xps: 10086 },
        { level: 10, xps: 11885 },
        { level: 11, xps: 13850 },
        { level: 12, xps: 15883 },
        { level: 13, xps: 18290 },
        { level: 14, xps: 20773 },
        { level: 15, xps: 23435 },
        { level: 16, xps: 26281 },
        { level: 17, xps: 29312 },
        { level: 18, xps: 32532 },
        { level: 19, xps: 35943 },
        { level: 20, xps: 39449 },
        { level: 21, xps: 43351 },
        { level: 22, xps: 47353 },
        { level: 23, xps: 51556 },
        { level: 24, xps: 55964 },
        { level: 25, xps: 60577 },
        { level: 26, xps: 65399 },
        { level: 27, xps: 70432 },
        { level: 28, xps: 75677 },
        { level: 29, xps: 81137 },
        { level: 30, xps: 86813 },
        { level: 31, xps: 92709 },
        { level: 32, xps: 98824 },
        { level: 33, xps: 105162 },
        { level: 34, xps: 111724 },
        { level: 35, xps: 118512 },
        { level: 36, xps: 125527 },
        { level: 37, xps: 132772 },
        { level: 38, xps: 140248 },
        { level: 39, xps: 147956 },
        { level: 40, xps: 155898 },
        { level: 41, xps: 164076 },
        { level: 42, xps: 172492 },
        { level: 43, xps: 181146 },
        { level: 44, xps: 190040 },
        { level: 45, xps: 199176 },
        { level: 46, xps: 208555 },
        { level: 47, xps: 218179 },
        { level: 48, xps: 228049 },
        { level: 49, xps: 238166 },
        { level: 50, xps: 248532 },
        { level: 51, xps: 259148 },
        { level: 52, xps: 270015 },
        { level: 53, xps: 281135 },
        { level: 54, xps: 292509 },
        { level: 55, xps: 304138 },
        { level: 56, xps: 316023 },
        { level: 57, xps: 328166 },
        { level: 58, xps: 340568 },
        { level: 59, xps: 353230 },
        { level: 60, xps: 366153 },
        { level: 61, xps: 379339 },
        { level: 62, xps: 392788 },
        { level: 63, xps: 406502 },
        { level: 64, xps: 420482 },
        { level: 65, xps: 434728 },
        { level: 66, xps: 449243 },
        { level: 67, xps: 464027 },
        { level: 68, xps: 479081 },
        { level: 69, xps: 494407 },
        { level: 70, xps: 510004 },
        { level: 71, xps: 525875 },
        { level: 72, xps: 542021 },
        { level: 73, xps: 558442 },
        { level: 74, xps: 575140 },
        { level: 75, xps: 592115 },
        { level: 76, xps: 609368 },
        { level: 77, xps: 626901 },
        { level: 78, xps: 644714 },
        { level: 79, xps: 662809 },
        { level: 80, xps: 681186 },
        { level: 81, xps: 699846 },
        { level: 82, xps: 718791 },
        { level: 83, xps: 738021 },
        { level: 84, xps: 757537 },
        { level: 85, xps: 777339 },
        { level: 86, xps: 797430 },
        { level: 87, xps: 817810 },
        { level: 88, xps: 838479 },
        { level: 89, xps: 859439 },
        { level: 90, xps: 880690 },
        { level: 91, xps: 902234 },
        { level: 92, xps: 924071 },
        { level: 93, xps: 946202 },
        { level: 94, xps: 968628 },
        { level: 95, xps: 991349 },
        { level: 96, xps: 1014368 },
        { level: 97, xps: 1037683 },
        { level: 98, xps: 1061297 },
        { level: 99, xps: 1085210 },
        { level: 100, xps: 1109432 }
    ];
    
    const xpsHunter = [
        { level: 0, xps: 480 },
        { level: 1, xps: 1044 },
        { level: 2, xps: 1713 },
        { level: 3, xps: 2497 },
        { level: 4, xps: 3408 },
        { level: 5, xps: 4451 },
        { level: 6, xps: 5635 },
        { level: 7, xps: 6966 },
        { level: 8, xps: 8447 },
        { level: 9, xps: 10086 },
        { level: 10, xps: 11885 },
        { level: 11, xps: 13850 },
        { level: 12, xps: 15883 },
        { level: 13, xps: 18290 },
        { level: 14, xps: 20773 },
        { level: 15, xps: 23435 },
        { level: 16, xps: 26281 },
        { level: 17, xps: 29312 },
        { level: 18, xps: 32532 },
        { level: 19, xps: 35943 },
        { level: 20, xps: 39549 },
        { level: 21, xps: 43351 },
        { level: 22, xps: 47353 },
        { level: 23, xps: 51556 },
        { level: 24, xps: 55964 },
        { level: 25, xps: 60577 },
        { level: 26, xps: 65399 },
        { level: 27, xps: 70432 },
        { level: 28, xps: 75677 },
        { level: 29, xps: 81137 },
        { level: 30, xps: 86813 },
        { level: 31, xps: 92709 },
        { level: 32, xps: 98824 },
        { level: 33, xps: 105162 },
        { level: 34, xps: 111724 },
        { level: 35, xps: 118512 },
        { level: 36, xps: 125527 },
        { level: 37, xps: 132772 },
        { level: 38, xps: 140248 },
        { level: 39, xps: 147956 },
        { level: 40, xps: 155898 },
        { level: 41, xps: 164076 },
        { level: 42, xps: 172492 },
        { level: 43, xps: 181146 },
        { level: 44, xps: 190040 },
        { level: 45, xps: 199176 },
        { level: 46, xps: 208555 },
        { level: 47, xps: 218179 },
        { level: 48, xps: 228049 },
        { level: 49, xps: 238166 },
        { level: 50, xps: 248532 },
        { level: 51, xps: 259148 },
        { level: 52, xps: 270015 },
        { level: 53, xps: 281135 },
        { level: 54, xps: 292509 },
        { level: 55, xps: 304138 },
        { level: 56, xps: 316023 },
        { level: 57, xps: 328166 },
        { level: 58, xps: 340568 },
        { level: 59, xps: 353230 },
        { level: 60, xps: 366153 },
        { level: 61, xps: 379339 },
        { level: 62, xps: 392788 },
        { level: 63, xps: 406502 },
        { level: 64, xps: 420482 },
        { level: 65, xps: 434728 },
        { level: 66, xps: 449243 },
        { level: 67, xps: 464027 },
        { level: 68, xps: 479081 },
        { level: 69, xps: 494407 },
        { level: 70, xps: 510004 },
        { level: 71, xps: 525875 },
        { level: 72, xps: 542021 },
        { level: 73, xps: 558442 },
        { level: 74, xps: 575140 },
        { level: 75, xps: 592115 },
        { level: 76, xps: 609368 },
        { level: 77, xps: 626901 },
        { level: 78, xps: 644714 },
        { level: 79, xps: 662809 },
        { level: 80, xps: 681186 },
        { level: 81, xps: 699846 },
        { level: 82, xps: 718791 },
        { level: 83, xps: 738021 },
        { level: 84, xps: 757537 },
        { level: 85, xps: 777339 },
        { level: 86, xps: 797430 },
        { level: 87, xps: 817810 },
        { level: 88, xps: 838479 },
        { level: 89, xps: 859439 },
        { level: 90, xps: 880690 },
        { level: 91, xps: 902234 },
        { level: 92, xps: 924071 },
        { level: 93, xps: 946202 },
        { level: 94, xps: 968628 },
        { level: 95, xps: 991349 },
        { level: 96, xps: 1014368 },
        { level: 97, xps: 1037683 },
        { level: 98, xps: 1061297 },
        { level: 99, xps: 1085210 },
        { level: 100, xps: 1109432 }
    ];

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