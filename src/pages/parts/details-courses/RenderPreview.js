import React from "react"
import YouTube from "react-youtube"

import Accordion, { IconPlay, IconLock, Item } from "src/components/Accordion"
import Modal from "src/components/Modal"

export default function RenderPreview({ chapters }) {
  return (
    <div className="accordion">
      <Accordion>
        {(active, toggle) => {
          return chapters?.map((chapter, index) => {
            return (
              <Item
                id={chapter?.id}
                name={chapter?.name}
                child={chapter?.lessons}
                active={active}
                toggle={toggle}
                key={`${index}-${chapter?.id}`}
              >
                {chapter?.lessons?.length > 0 &&
                  chapter?.lessons?.map((lesson, index2) => (
                    <div
                      key={`${index2}-${lesson?.id}`}
                      className="relative hover:bg-gray-200 flex justify-between items-center pl-8 pr-4 py-2"
                    >
                      <span className="text-gray-500 font-medium tracking-wide">
                        {lesson?.name ?? "Lessons Name"}
                      </span>
                      {index2 === 0 && (
                        <Modal
                          content={(toggleModal) => (
                            <YouTube
                              videoId={lesson?.video}
                              id={lesson?.video}
                              opts={{
                                playerVars: {
                                  autoplay: 1,
                                  controls: 1,
                                  showinfo: 1,
                                },
                              }}
                            ></YouTube>
                          )}
                        >
                          {(toggleModal) => (
                            <span
                              className="link-wrapped"
                              onClick={toggleModal}
                            ></span>
                          )}
                        </Modal>
                      )}
                      {index2 === 0 && (
                        <IconPlay
                          className="fill-current text-orange-500"
                          width={20}
                          height={20}
                        ></IconPlay>
                      )}
                      {index2 !== 0 && <IconLock></IconLock>}
                    </div>
                  ))}
              </Item>
            )
          })
        }}
      </Accordion>
    </div>
  )
}
