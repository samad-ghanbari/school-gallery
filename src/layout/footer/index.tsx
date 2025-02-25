import { footerSectionData } from "@/data/layout/footer";
import { LinkProps, SectionProps } from "@/src/common-types"; //ImageProps
import { Container } from "@/src/components/container";
import { CustomLink } from "@/src/components/custom-link";
import { cn } from "@/src/utils/shadcn";
//import Image from 'next/image';
import { BrandLogo } from "@/src/layout/brand-logo";
import {
	FaChevronLeft,
	FaEnvelope,
	// FaPaperPlane,
	FaPhone,
	FaMap,
} from "react-icons/fa6";

interface SocialLinkProps {
	icon: React.ReactNode;
	href: string;
}

export interface FooterSectionProps {
	about: {
		description: string;
		socialLinks: SocialLinkProps[];
	};
	columnOne: {
		title: string;
		links: LinkProps[];
	};
	columnTwo: {
		title: string;
		//blogs: RecentBlog[];
		links: LinkProps[];
	};
	columnThree: {
		title: string;
		location: string;
		mails: string[];
		phoneNumbers: string[];
	};

	footerBottom: {
		copyrightText: string;
		links: LinkProps[];
	};
}

const socialIconClasses = cn(
	"text-base/[1.75] transition-transform duration-350 hover:-translate-y-1 block px-4"
);
const titleClasses = cn(
	"text-gray-900 dark:text-white  text-md font-bold  leading-[1.25] md:text-lg mb-5 md:mb-[1.875rem]"
);
const addressIconParentClasses = cn(
	"w-10 h-10 rounded-5 inline-grid place-items-center dark:bg-accent-700 border border-accent-800 dark:border-transparent text-primary flex-none"
);
const addressItemClasses = cn("flex items-center gap-5");
const textColor = cn(
	"transition-colors duration-300 hover:text-primary dark:hover:text-white"
);

export function Footer({ className }: SectionProps) {
	const { about, columnOne, columnTwo, columnThree, footerBottom } =
		footerSectionData;
	return (
		<footer
			className={cn(
				"overflow-hidden bg-accent-100 text-accent-800 dark:bg-accent-900 dark:text-body",
				className
			)}>
			<div className="py-16 md:py-20">
				<Container>
					<div className="grid gap-10 md:grid-cols-2  xl:grid-cols-4">
						{/* About  */}
						<div
							data-aos="fade-up"
							data-aos-delay="200">
							<BrandLogo />
							<p className="mb-7 mt-3">
								{about.description}
							</p>
							{about.socialLinks &&
								about.socialLinks.length >
									0 && (
									<nav aria-label="social links">
										<ul className="inline-flex min-h-[50px] items-center divide-x rounded-5 bg-primary  text-white">
											{about.socialLinks.map(
												(
													socialLink,
													index
												) => (
													<li
														key={
															index
														}>
														<CustomLink
															aria-label={
																socialLink.href
															}
															className={
																socialIconClasses
															}
															href={
																socialLink.href
															}
															openNewTab>
															<span>
																{
																	socialLink.icon
																}
															</span>
														</CustomLink>
													</li>
												)
											)}
										</ul>
									</nav>
								)}
						</div>

						{/* Column one  */}
						<div
							data-aos="fade-up"
							data-aos-delay="400">
							<h3 className={titleClasses}>
								{columnOne.title}
							</h3>
							{columnOne.links &&
								columnOne.links.length > 0 && (
									<nav aria-label="footer links navigation">
										<ul className="grid gap-2">
											{columnOne.links.map(
												(
													link
												) => (
													<li
														key={
															link.label
														}
														className="flex items-center gap-2.5">
														<span className="flex-none text-sm/[1] text-sky-600 dark:text-white">
															<FaChevronLeft />
														</span>
														<CustomLink
															href={
																link.href
															}
															openNewTab={
																link.openNewTab
															}
															className={
																textColor
															}>
															{
																link.label
															}
														</CustomLink>
													</li>
												)
											)}
										</ul>
									</nav>
								)}
						</div>

						{/* Column two  */}
						<div
							data-aos="fade-up"
							data-aos-delay="400">
							<h3 className={titleClasses}>
								{columnTwo.title}
							</h3>
							{columnTwo.links &&
								columnTwo.links.length > 0 && (
									<nav aria-label="footer links navigation">
										<ul className="grid gap-2">
											{columnTwo.links.map(
												(
													link
												) => (
													<li
														key={
															link.label
														}
														className="flex items-center gap-2.5">
														<span className="flex-none text-sm/[1] text-sky-600 dark:text-white">
															<FaChevronLeft />
														</span>
														<CustomLink
															href={
																link.href
															}
															openNewTab={
																link.openNewTab
															}
															className={
																textColor
															}>
															{
																link.label
															}
														</CustomLink>
													</li>
												)
											)}
										</ul>
									</nav>
								)}
						</div>
						{/* Column Three  */}
						<div
							data-aos="fade-up"
							data-aos-delay="600">
							<h3 className={titleClasses}>
								{columnThree.title}
							</h3>
							<ul
								aria-label="addresses"
								className="grid gap-5">
								<li
									className={
										addressItemClasses
									}>
									<span
										className={
											addressIconParentClasses
										}>
										<FaMap />
									</span>
									<address className="not-italic">
										{
											columnThree.location
										}
									</address>
								</li>
								<li
									className={
										addressItemClasses
									}>
									<span
										className={
											addressIconParentClasses
										}>
										<FaEnvelope />
									</span>
									{columnThree.mails &&
										columnThree.mails
											.length >
											0 && (
											<div className="grid gap-1">
												{columnThree.mails.map(
													(
														mail,
														index
													) => (
														<a
															key={
																index
															}
															href={`mailto:${mail}`}
															className={
																textColor
															}>
															{
																mail
															}
														</a>
													)
												)}
											</div>
										)}
								</li>
								<li
									className={
										addressItemClasses
									}>
									<span
										className={
											addressIconParentClasses
										}>
										<FaPhone />
									</span>
									{columnThree.phoneNumbers &&
										columnThree
											.phoneNumbers
											.length >
											0 && (
											<div className="grid gap-1">
												{columnThree.phoneNumbers.map(
													(
														phoneNumber,
														index
													) => (
														<a
															key={
																index
															}
															href={`tel:${phoneNumber
																.split(
																	" "
																)
																.join(
																	""
																)}`}
															className={
																textColor
															}>
															{
																phoneNumber
															}
														</a>
													)
												)}
											</div>
										)}
								</li>
							</ul>
						</div>
					</div>
				</Container>
			</div>
			<div className="flex min-h-[90px] items-center border-t border-accent-800 border-opacity-20 py-5 dark:border-body dark:border-opacity-20">
				<Container>
					<div className="flex flex-wrap items-center justify-between gap-x-8 gap-y-4 md:gap-x-10">
						<p>{footerBottom.copyrightText}</p>
						{footerBottom.links &&
							footerBottom.links.length > 0 && (
								<nav aria-label="footer bottom navigation">
									<ul className="flex flex-wrap items-center gap-x-4  md:gap-x-7">
										{footerBottom.links.map(
											(link) => (
												<li
													key={
														link.label
													}>
													<CustomLink
														aria-label={`Go to page ${link.label}`}
														href={
															link.href
														}
														openNewTab={
															link.openNewTab
														}
														className={
															textColor
														}>
														{
															link.label
														}
													</CustomLink>
												</li>
											)
										)}
									</ul>
								</nav>
							)}
					</div>
				</Container>
			</div>
		</footer>
	);
}
