-- DropForeignKey
ALTER TABLE "GuideProfile" DROP CONSTRAINT "GuideProfile_userId_fkey";

-- AddForeignKey
ALTER TABLE "GuideProfile" ADD CONSTRAINT "GuideProfile_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
