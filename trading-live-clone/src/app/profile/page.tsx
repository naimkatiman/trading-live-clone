"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Layout } from "@/components/layout";
import { useAuth } from "@/lib/auth";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { VideoCard } from "@/components/card-components";
import { videosData } from "@/data/mock-data";

export default function ProfilePage() {
  const router = useRouter();
  const { user, logout } = useAuth();
  const [name, setName] = useState(user?.name || "");
  const [bio, setBio] = useState("Forex trader with 5 years of experience. Specializing in swing trading and technical analysis.");
  const [email, setEmail] = useState(user?.email || "");

  // If user is not authenticated, redirect to home
  if (!user) {
    router.push("/");
    return null;
  }

  const handleUpdateProfile = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send data to an API
    alert("Profile updated successfully");
  };

  const handleChangePassword = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send data to an API
    alert("Password change request submitted");
  };

  return (
    <Layout>
      <div className="max-w-7xl mx-auto py-6 px-4">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/4">
            <Card>
              <CardHeader className="text-center">
                <div className="mx-auto mb-4">
                  <Avatar className="h-24 w-24">
                    <AvatarImage src={user.avatar} alt={user.name} />
                    <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                </div>
                <CardTitle>{user.name}</CardTitle>
                <CardDescription className="text-sm">
                  Member since January 2023
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Role:</span>
                    <span className="font-medium capitalize">{user.role}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Posts:</span>
                    <span className="font-medium">12</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Comments:</span>
                    <span className="font-medium">48</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Followers:</span>
                    <span className="font-medium">245</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full" onClick={() => logout()}>
                  Log out
                </Button>
              </CardFooter>
            </Card>
          </div>

          <div className="flex-1">
            <Tabs defaultValue="account" className="w-full">
              <TabsList className="mb-6">
                <TabsTrigger value="account">Account</TabsTrigger>
                <TabsTrigger value="security">Security</TabsTrigger>
                <TabsTrigger value="activity">Activity</TabsTrigger>
                <TabsTrigger value="saved">Saved Content</TabsTrigger>
              </TabsList>

              <TabsContent value="account">
                <Card>
                  <CardHeader>
                    <CardTitle>Account Information</CardTitle>
                    <CardDescription>
                      Update your account information and profile details
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleUpdateProfile} className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input
                          id="name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="bio">Bio</Label>
                        <textarea
                          id="bio"
                          className="w-full p-2 border rounded-md min-h-[100px] bg-background"
                          value={bio}
                          onChange={(e) => setBio(e.target.value)}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="timezone">Timezone</Label>
                        <Select defaultValue="utc">
                          <SelectTrigger>
                            <SelectValue placeholder="Select timezone" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="utc">UTC (GMT+0)</SelectItem>
                            <SelectItem value="est">Eastern Time (GMT-5)</SelectItem>
                            <SelectItem value="pst">Pacific Time (GMT-8)</SelectItem>
                            <SelectItem value="cst">Central European Time (GMT+1)</SelectItem>
                            <SelectItem value="jst">Japan Standard Time (GMT+9)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="notifications">Email Notifications</Label>
                        <Select defaultValue="all">
                          <SelectTrigger>
                            <SelectValue placeholder="Select notification preferences" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="all">All notifications</SelectItem>
                            <SelectItem value="important">Important only</SelectItem>
                            <SelectItem value="none">None</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="flex justify-end">
                        <Button type="submit">Save Changes</Button>
                      </div>
                    </form>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="security">
                <Card>
                  <CardHeader>
                    <CardTitle>Security Settings</CardTitle>
                    <CardDescription>
                      Manage your security preferences and password
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleChangePassword} className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="current-password">Current Password</Label>
                        <Input id="current-password" type="password" required />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="new-password">New Password</Label>
                        <Input id="new-password" type="password" required />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="confirm-password">Confirm New Password</Label>
                        <Input id="confirm-password" type="password" required />
                      </div>

                      <Separator />

                      <div className="space-y-2">
                        <h3 className="text-lg font-medium">Two-Factor Authentication</h3>
                        <p className="text-sm text-muted-foreground">
                          Add an extra layer of security to your account by enabling two-factor authentication.
                        </p>
                        <Button variant="outline" className="mt-2">
                          Enable 2FA
                        </Button>
                      </div>

                      <div className="flex justify-end">
                        <Button type="submit">Change Password</Button>
                      </div>
                    </form>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="activity">
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Activity</CardTitle>
                    <CardDescription>
                      Your recent interactions on the platform
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-8">
                      <div className="space-y-4">
                        <h3 className="text-lg font-medium">Comments</h3>
                        <div className="space-y-4">
                          <div className="border rounded-lg p-4">
                            <div className="flex items-center justify-between mb-2">
                              <div className="flex items-center gap-2">
                                <span className="font-medium">On "Swing Trading vs. Intraday Trading"</span>
                              </div>
                              <span className="text-xs text-muted-foreground">2 days ago</span>
                            </div>
                            <p className="text-sm">
                              Great comparison! I've found swing trading better fits my lifestyle as I don't have time to monitor charts all day. The section on risk management was especially helpful.
                            </p>
                          </div>

                          <div className="border rounded-lg p-4">
                            <div className="flex items-center justify-between mb-2">
                              <div className="flex items-center gap-2">
                                <span className="font-medium">On "Technical Analysis in 08 Stories"</span>
                              </div>
                              <span className="text-xs text-muted-foreground">1 week ago</span>
                            </div>
                            <p className="text-sm">
                              This series has completely changed my approach to reading charts. The way you explained support and resistance zones made things click for me.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <h3 className="text-lg font-medium">Questions</h3>
                        <div className="space-y-4">
                          <div className="border rounded-lg p-4">
                            <div className="flex items-center justify-between mb-2">
                              <div className="flex items-center gap-2">
                                <span className="font-medium">How do you manage risk when trading volatile assets?</span>
                              </div>
                              <span className="text-xs text-muted-foreground">2 weeks ago</span>
                            </div>
                            <p className="text-sm text-muted-foreground">
                              8 answers · 24 upvotes
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="saved">
                <Card>
                  <CardHeader>
                    <CardTitle>Saved Content</CardTitle>
                    <CardDescription>
                      Videos and articles you've saved for later
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Tabs defaultValue="videos">
                      <TabsList className="mb-6">
                        <TabsTrigger value="videos">Videos</TabsTrigger>
                        <TabsTrigger value="ebooks">E-Books</TabsTrigger>
                        <TabsTrigger value="posts">Community Posts</TabsTrigger>
                      </TabsList>

                      <TabsContent value="videos">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                          {videosData.slice(0, 3).map((video) => (
                            <VideoCard
                              key={video.id}
                              id={video.id}
                              title={video.title}
                              thumbnail={video.thumbnail}
                              duration={video.duration}
                              views={video.views}
                              author={video.author}
                              badge={video.badge as "FREE" | "SPEAKER"}
                            />
                          ))}
                        </div>
                      </TabsContent>

                      <TabsContent value="ebooks">
                        <div className="text-center py-8">
                          <p className="text-muted-foreground">You haven't saved any e-books yet.</p>
                        </div>
                      </TabsContent>

                      <TabsContent value="posts">
                        <div className="text-center py-8">
                          <p className="text-muted-foreground">You haven't saved any community posts yet.</p>
                        </div>
                      </TabsContent>
                    </Tabs>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </Layout>
  );
}
